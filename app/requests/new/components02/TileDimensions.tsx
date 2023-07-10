import React, { useState } from 'react'
import Image from 'next/image'
import ziegelDeckMass from 'public/ziegeldeckmass.png'
import {Input, Select, Option, Alert} from '@/app/materialComponents'

type Props = {}

const TileDimensions = (props: Props) => {

  const [tileDistance, setTileDistance] = useState<string>('');
  const [tileWidth, setTileWidth] = useState<string>('');
  const [tileHeight, setTileHeight] = useState<string>('');
  const [fixationType, setFixationType] = useState<string>('');

  const handletileDistanceChange = (e: any) => {
    setTileDistance(e.target.value)
  }

  const handleTileWidthChange = (e: any) => {
    setTileWidth(e.target.value)
  }

  const handleTileHeightChange = (e: any) => {
    setTileHeight(e.target.value)
  }

  const handleFixationTypeChange = (e: string) => {
    setFixationType(e)
  }

  return (
    <div className='flex flex-col gap-2'>
      <Image src={ziegelDeckMass} alt="Ziegeldeckmaß" className='mx-auto p-8'></Image>
      <div className='grid gap-2 grid-cols-3'>
        <div className='relative'>
          <Input value={tileDistance} onChange={handletileDistanceChange}label='Ziegeldeckmaß'/>
          {(tileDistance.length != 0) && <div id="abstandUnit" className="!absolute right-3 top-2">cm</div>}
        </div>
        <div className='relative'>
          <Input value={tileWidth} onChange={handleTileWidthChange}label='Breite'/>
          {(tileWidth.length != 0) && <div  id="abstandUnit" className="!absolute right-3 top-2">cm</div>}
        </div>
        <div className='relative'>
          <Input value={tileHeight} onChange={handleTileHeightChange}label='Höhe'/>
          {(tileHeight.length != 0) && <div  id="abstandUnit" className="!absolute right-3 top-2">cm</div>}
        </div>
      </div>
      <Select value={fixationType} onChange={(choice) => handleFixationTypeChange(choice as string)} label="Befestigung der Ziegel">
        <Option value="loose">Lose gelegt</Option>
        <Option value="solidified">Vermörtelt</Option>
        <Option value="cramped">Geklammert</Option>
        <Option value="clued">Geklebt</Option>
        <Option value="docked">Auf Pappdocken</Option>
        <Option value="slate">Kunst- / Naturschiefer</Option>
        <Option value="pantile">Hohlpfanne</Option>
        <Option value="unknown">Nicht erkennbar</Option>
      </Select>
      {["solidified", "cramped", "clued"].includes(fixationType) ? <Alert color="blue" variant="outlined">
        <span>Mehrkosten in Höhe von 150,00 € zzgl. MwSt. pro KWp fallen an.</span>
      </Alert> : null }
      {(fixationType == "unknown") ? <Alert color="blue" variant="outlined">
        <span>Auftraggeber übernimmt mögliche Mehrkosten.</span>
      </Alert> : null }
      {["docked", "slate", "pantile"].includes(fixationType) ? <Alert color="blue" variant="outlined">
        <span>Installtion ist nicht möglich.</span>
      </Alert> : null }
    </div>
  )
}

export default TileDimensions