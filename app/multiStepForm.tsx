import React, { ReactElement, useState } from 'react'

function multiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return 1
            return i + 1
        })
    }

    function prev() {
        setCurrentStepIndex(i => {
            if (i <= 0) return 1
            return i - 1
        })
    }

    function goToStep(index: number) {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        goToStep,
        next,
        prev
    }
}

export default multiStepForm