'use client'

import React from 'react'
import { Card, Stepper, Step, Button } from '@/app/materialComponents'
import CustomerData from './components01/CustomerData'
import DcMontage from './components02/DcMontage'

const page = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
 
    const handleNextStep = () => {console.log("next step"); !isLastStep && setActiveStep((cur) => cur + 1)};
    const handlePrevStep = () => !isFirstStep && setActiveStep((cur) => cur - 1);
    
    return (
        <Card className="mt-6 w-1/2 container mx-auto p-16" >
          <div className="mb-16">
            <Stepper 
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step onClick={() => setActiveStep(0)}>1</Step>
                <Step onClick={() => setActiveStep(1)}>2</Step>
                <Step onClick={() => setActiveStep(2)}>3</Step>
                <Step onClick={() => setActiveStep(3)}>4</Step>
                <Step onClick={() => setActiveStep(4)}>5</Step>
            </Stepper>
          </div>
          {activeStep == 0 ? <CustomerData/>: null}
          {activeStep == 1 ? <DcMontage/>: null}
          <div className="mt-16 flex justify-between">
              <Button onClick={handlePrevStep} disabled={isFirstStep}>
              Zurück
              </Button>
              <Button onClick={handleNextStep} disabled={isLastStep}>
              Weiter
              </Button>
          </div>
        </Card>
    );
}

export default page