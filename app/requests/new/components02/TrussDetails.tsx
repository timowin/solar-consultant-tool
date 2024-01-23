import React, { useState } from "react";
import Image from "next/image";
import {
  Typography,
  Select,
  Option,
  Input,
  Checkbox,
} from "@/app/materialComponents";

import dachAufbau from "public/dachAufbau.png";

const TrussDetails = () => {
  const [trussDistance, setTrussDistance] = useState<string>("");
  const [trussWidth, setTrussWidth] = useState<string>("");
  const [trussHeight, setTrussHeight] = useState<string>("");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");
  const [miscMaterialIsSelected, setMiscMaterialIsSelected] =
    useState<boolean>(false);
  const [trussIsVisible, setTrussIsVisible] = useState<boolean>(false);

  const handleTrussDistance = (e: any) => {
    setTrussDistance(e.target.value);
  };

  const handleTrussWidthChange = (e: any) => {
    setTrussWidth(e.target.value);
  };

  const handleTrussHeightChange = (e: any) => {
    setTrussHeight(e.target.value);
  };

  const handleTrussVisibilityChange = (e: any) => {
    //setTrussIsVisible
  };

  const handleMaterialChange = (e: any) => {
    setSelectedMaterial(e);
    if (e == "miscellaneous") {
      setMiscMaterialIsSelected(true);
    } else {
      setMiscMaterialIsSelected(false);
    }
  };

  return (
    <div>
      <Image src={dachAufbau} alt="Dachaufbau" className="mx-auto p-8"></Image>
      <div className="grid grid-row-2 gap-2">
        <div className="grid grid-cols-3 gap-2">
          <div className="relative">
            <Input
              value={trussDistance}
              onChange={handleTrussDistance}
              label="Abstand (a)"
            />
            {trussDistance.length != 0 && (
              <div id="abstandUnit" className="absolute right-3 top-2">
                cm
              </div>
            )}
          </div>
          <div className="relative">
            <Input
              value={trussWidth}
              onChange={handleTrussWidthChange}
              label="Breite (b)"
            />
            {trussWidth.length != 0 && (
              <div id="abstandUnit" className="absolute right-3 top-2">
                cm
              </div>
            )}
          </div>
          <div className="relative">
            <Input
              value={trussHeight}
              onChange={handleTrussHeightChange}
              label="Höhe (c)"
            />
            {trussHeight.length != 0 && (
              <div id="abstandUnit" className="absolute right-3 top-2">
                cm
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Select
            value={selectedMaterial}
            onChange={(choice) => handleMaterialChange(choice as string)}
            label="Material"
          >
            <Option value="wood">Holz</Option>
            <Option value="metal">Metall</Option>
            <Option value="miscellaneous">Sonstiges</Option>
          </Select>
          {miscMaterialIsSelected && <Input label="Material" />}
        </div>
        <Checkbox
          onChange={handleTrussVisibilityChange}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal py-2"
            >
              Dachstuhl kann nicht eingesehen werden. Der technische Dachaufbau
              erfolgt durch den Auftraggeber.
            </Typography>
          }
        />
      </div>
    </div>
  );
};

export default TrussDetails;
