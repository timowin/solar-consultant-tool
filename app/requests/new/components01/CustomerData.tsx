"use client";

import React, { useState } from "react";

import { Input, Typography, Checkbox } from "../../../materialComponents.jsx";

function CustomerData() {
  const [isProjectAdressShown, setIsProjectAdressShown] = useState(false);

  const checkBoxHandler = () => {
    setIsProjectAdressShown(!isProjectAdressShown);
  };
  return (
    <form>
      <Typography className="mb-4" variant="h4" color="blue-gray">
        01 Angaben Auftraggeber
      </Typography>
      <Typography color="gray" className="font-normal">
        Rechnungsadresse
      </Typography>
      <div className="flex flex-col gap-2">
        <div className="basis-1/2 flex flex-col gap-2">
          <div className="basis-full flex flex-row gap-2">
            <Input label="Vorname"></Input>
            <Input label="Nachname"></Input>
          </div>
          <div className="basis-full">
            <Input label="Kundennummer"></Input>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-2">
          <div className="basis-full">
            <Input label="Straße & Hausnummer"></Input>
          </div>
          <div className="basis-full flex flex-row gap-2">
            <Input label="PLZ"></Input>
            <Input label="Ort"></Input>
          </div>
          <Checkbox
            checked={isProjectAdressShown}
            onChange={checkBoxHandler}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Adresse des Bauvorhabens weicht von der Rechnungsadresse ab
              </Typography>
            }
          />
          {isProjectAdressShown && (
            <div>
              <Typography color="gray" className="mt-1 font-normal">
                Adresse des Bauvorhabens
              </Typography>
              <div className="basis-1/2 flex flex-col gap-2 ">
                <div className="basis-full">
                  <Input label="Straße & Hausnummer"></Input>
                </div>
                <div className="basis-full flex flex-row gap-2">
                  <Input label="PLZ"></Input>
                  <Input label="Ort"></Input>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default CustomerData;
