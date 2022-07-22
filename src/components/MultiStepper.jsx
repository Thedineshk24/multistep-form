import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import "../styles/steps.css";
import { activeStepRender } from '../utils/activeStepRender';
import { activeButtonName } from '../utils/activeButtonName';

const steps = ['1', '2', '3', '4'];

export default function MultiStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box className="steps">
            <center>
                <img className="logo" src="https://cdn.cutshort.io/public/images/new_logo_full.png" alt="cutshort logo" />
            </center>
            <Stepper activeStep={activeStep} className="spaces">
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {
                        activeStepRender(activeStep)
                    }
                    <Box sx={{ display: 'flex', justifyContent: "center", flexDirection: 'row', pt: 2 }}>
                        <Button className="btn" variant="outlined" color='primary' onClick={handleNext} sx={{ margin: "0 auto", width: "300px", backgroundColor: "#654DE4", color: "black" }} >
                            {activeStep === steps.length - 1 ? 'Launch Cutshort' : activeButtonName(activeStep)}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
