"use client";

import React, { useState } from "react";
import { Select, Option, Typography, Checkbox } from "@/app/materialComponents";

const TrapezeDetails = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");
  //const [materialIsTooSmall, setMaterialIsTooSmall] = useState<boolean>;
  const [materialStrengthLimit, setMaterialStrengthLimit] =
    useState<string>("");
  const aluminiumStrengthLimit: string = "0,7";
  const steelStrengthLimit: string = "0,5";

  const handleTrapezeMaterialChange = (e: string) => {
    setSelectedMaterial(e);
    if (e == "aluminium") {
      setMaterialStrengthLimit(aluminiumStrengthLimit);
    } else {
      setMaterialStrengthLimit(steelStrengthLimit);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid gap-2 grid-cols-2">
        <Select
          value={selectedMaterial}
          onChange={(choice) => handleTrapezeMaterialChange(choice as string)}
          label="Material"
        >
          <Option value="aluminium">Aluminium</Option>
          <Option value="steel">Stahl</Option>
        </Select>
        <Select label="Stärke">
          <Option value="big">
            größer/gleich {materialStrengthLimit}mm Stärke
          </Option>
          <Option value="small">
            kleiner {materialStrengthLimit}mm Stärke
          </Option>
        </Select>
      </div>
      <Checkbox
        id="icopal"
        label={
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal py-2"
          >
            Wenn Dacheindeckung von Hersteller Icopal, dann nicht bebaubar.
          </Typography>
        }
      />
    </div>
  );
};

export default TrapezeDetails;
