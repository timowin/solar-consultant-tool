import React, { ReactNode, useState } from 'react'
import RoofType from './RoofType'

import sattelDach from 'public/satteldach.png'
import pultDach from 'public/pultdach.png'
import flachDach from 'public/flachdach.png'
import walmDach from 'public/walmdach.png'
import { Radio } from '@/app/materialComponents'

const RoofTypeSelector = () => {


  return (
    <div className='grid grid-cols-2 gap-8'>
      <Radio name="roofType" id="walm" label={<RoofType image={walmDach} name='Walmdach' description='Ein Dach mit vier geneigten Seiten, bei dem die beiden Seitenwände ebenfalls abgeschrägt sind.'/>} />
      <Radio name="roofType" id="flat" label={<RoofType image={flachDach} name='Flachdach' description='Ein horizontales Dach (mit Attika) ohne sichtbare Neigung, das ein modernes Erscheinungsbild verleiht.'/>} />
      <Radio name="roofType" id="mono" label={<RoofType image={pultDach} name='Pultdach' description='Ein asymmetrisches Dach mit einer geneigten Fläche, die an eine Wand angrenzt und eine einfache Konstruktion bietet.'/>} />
      <Radio name="roofType" id="gable" label={<RoofType image={sattelDach} name='Satteldach' description='Ein traditionelles Dach mit zwei geneigten Seiten, die in der Mitte zusammentreffen.'/>} />
    </div>
  )
}

export default RoofTypeSelector