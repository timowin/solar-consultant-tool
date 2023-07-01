'use client'

import React, { useState } from 'react'
import {Typography, Input } from '../../../materialComponents.jsx'
import RoofTypeSelector from './RoofTypeSelector'
import TrussDetails from './TrussDetails'

import RoofMaterial from './RoofMaterial'
import ElevationFlatRoof from './ElevationFlatRoof'

const DcMontage = () => {
  return (
    <form>
      <Typography className="mb-8" variant="h4" color="blue-gray">
        02 DC-Montage
      </Typography>

      <Typography color="gray" className="font-normal mt-10 mb-4">
        Dachform
      </Typography>
      <RoofTypeSelector/>

      <Typography color="gray" className="font-normal mt-10 mb-4">
        Dachaufbau
      </Typography>
      <TrussDetails/>

      <Typography color="gray" className="font-normal mt-10 mb-4">
        Dacheindeckung
      </Typography>
      <RoofMaterial/>

      <Typography color="gray" className="font-normal mt-10 mb-4">
        Aufständerung bei Flachdächern
      </Typography>

      <ElevationFlatRoof/>

    </form>
  )
}

export default DcMontage