import React from 'react'
import Image from 'next/image'
import {Card, CardBody, CardFooter, Typography} from '../../../materialComponents.jsx'

type Props = {
    image: any,
    name: string,
    description: string,
    isSelected: boolean,
}

const RoofType = (props: Props) => {
  return (
    <div "flex flex-row">
      <div>
        <Image className="" src={props.image} alt="Satteldach"/>
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
      </div>
    </div>
  )
}

export default RoofType