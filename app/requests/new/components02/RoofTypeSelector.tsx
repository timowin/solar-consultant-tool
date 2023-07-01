import React from 'react'
import RoofType from './RoofType'

import sattelDach from 'public/satteldach.png'
import pultDach from 'public/pultdach.png'
import flachDach from 'public/flachdach.png'
import walmDach from 'public/walmdach.png'
import { Select, Option } from '@/app/materialComponents'

type Props = {}

const RoofTypeSelector = (props: Props) => {
  return (
    <Select>
      <Option><RoofType isSelected={false} image={walmDach} name='Walmdach' description='Ein Dach mit vier geneigten Seiten, bei dem die beiden Seitenwände ebenfalls abgeschrägt sind.'/></Option>
      <Option><RoofType isSelected={false} image={flachDach} name='Flachdach' description='Ein horizontales Dach (mit Attika) ohne sichtbare Neigung, das ein modernes Erscheinungsbild verleiht.'/></Option>
      <Option><RoofType isSelected={false} image={pultDach} name='Pultdach' description='Ein asymmetrisches Dach mit einer geneigten Fläche, die an eine Wand angrenzt und eine einfache Konstruktion bietet.'/></Option>
      <Option><RoofType isSelected={false} image={sattelDach} name='Satteldach' description='Ein traditionelles Dach mit zwei geneigten Seiten, die in der Mitte zusammentreffen.'/></Option>
    </Select>
  )
}

export default RoofTypeSelector