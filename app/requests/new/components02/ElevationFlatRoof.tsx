import { Checkbox, Input, Typography } from "@/app/materialComponents";
import React from "react";
import Image from "next/image";
import elevatedNorth from "@/public/elevatedNorth.png";
import elevatedSouth from "@/public/elevatedSouth.png";

const ElevationFlatRoof = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Checkbox
            id="positiveTilt"
            label={
              <Typography
                variant="small"
                color="gray"
                className="my-2 flex items-center font-normal"
              >
                Positivneigung
              </Typography>
            }
          />
          <Input label="Gradzahl der Positivneigung"></Input>
          <Image
            className="mx-auto mt-8"
            src={elevatedNorth}
            alt="Satteldach"
          />
        </div>
        <div>
          <Checkbox
            id="negativeTilt"
            label={
              <Typography
                variant="small"
                color="gray"
                className="my-2 flex items-center font-normal"
              >
                Negativneigung
              </Typography>
            }
          />
          <Input label="Gradzahl der Positivneigung"></Input>
          <Image
            className="mx-auto mt-8"
            src={elevatedSouth}
            alt="Satteldach"
          />
        </div>
      </div>
      <Checkbox
        id="elevatedRoofExtraCosts"
        label={
          <Typography
            variant="small"
            color="gray"
            className="my-2 flex items-center font-normal"
          >
            Mir ist bekannt dass, bei einem Flachdach mit einer Neigung von mehr
            als 4 Grad eine Aufständerung mit Ballastierung nicht möglich ist.
            Daher ist nur eine Befestigung mit Dachdurchdringung möglich.
          </Typography>
        }
      />
    </div>
  );
};

export default ElevationFlatRoof;
