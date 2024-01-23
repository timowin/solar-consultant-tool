import React from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "../../../materialComponents.jsx";

type Props = {
  image: any;
  name: string;
  description: string;
};

const RoofType = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="basis-1/2">
        <Image className="w-1/3 mx-auto" src={props.image} alt="Satteldach" />
      </div>
      <div className="basis-1/2">{props.name}</div>
    </div>
  );
};

export default RoofType;
