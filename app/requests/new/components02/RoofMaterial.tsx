import React, { useState } from "react";

import TileDimensions from "./TileDimensions";
import TrapezeDetails from "./TrapezeDetails";

import {
  Select,
  Option,
  Checkbox,
  Typography,
} from "../../../materialComponents.jsx";

const RoofMaterial = () => {
  const [selectedRoofMaterial, setSelectedRoofMaterial] = useState<string>("");

  const handleRoofMaterialChange = (e: string) => {
    setSelectedRoofMaterial(e);
  };

  return (
    <div className="flex flex-col gap-2">
      <Select
        value={selectedRoofMaterial}
        onChange={(choice) => handleRoofMaterialChange(choice as string)}
        label="Art der Dacheindeckung"
      >
        <Option value="tiles">Ziegeldach</Option>
        <Option value="trapeze">Trapezdach</Option>
      </Select>
      {selectedRoofMaterial == "tiles" ? <TileDimensions /> : null}
      {selectedRoofMaterial == "trapeze" ? <TrapezeDetails /> : null}
      <Checkbox
        id="additionalCosts"
        label={
          <Typography
            variant="small"
            color="gray"
            className="my-2 flex items-center font-normal"
          >
            Mir ist bekannt, dass aufgrund von Alter und Zustand der
            Dacheindeckung bzw. durch die Ausführungsart der Dachmontage
            Ersatzziegel benötigt werden. Falls Ersatzziegel notwendig sind, ist
            der Auftraggeber verantwortlich diese bereitzustellen oder auf
            eigene Kosten zu beschaffen.
          </Typography>
        }
      />
    </div>
  );
};

export default RoofMaterial;
