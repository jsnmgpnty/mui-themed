/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, useState } from 'react';
import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import { PrimaryButton } from '../Button';
import StepIndicator from './StepIndicator';

type MultiStepContextType = {
  activeStep: number;
  totalSteps: number;
  handleNext: () => void;
  handleBack: () => void;
};

type MultiStepType = BoxProps & {
  defaultActiveState?: number;
};

type MultiStepNavigationType = BoxProps & {
  backComponent?: React.FC<Omit<MultiStepContextType, 'handleNext'>>;
  nextComponent?: React.FC<Omit<MultiStepContextType, 'handleBack'>>;
};

const MultiStepContext = React.createContext<MultiStepContextType>({
  activeStep: 0,
  totalSteps: 0,
  handleNext: () => {},
  handleBack: () => {},
});

const useMultiStep = () => {
  const context = React.useContext(MultiStepContext);
  if (!context) {
    throw new Error('Multistep components should be inside Multistep');
  }
  return context;
};

/**
 * Each step should be wrapped with Step Component
 */
const Step = ({
  stepIndex,
  ...props
}: PropsWithChildren<{ stepIndex?: number }>) => {
  const { activeStep } = useMultiStep();
  return activeStep === stepIndex ? <>{props.children}</> : null;
};

/**
 * Parent component, everything related should be wrapped by MultiStep
 */
const MultiStep = ({
  children,
  defaultActiveState = 0,
  ...props
}: PropsWithChildren<MultiStepType>) => {
  const [activeStep, setActiveStep] = useState(defaultActiveState);
  let totalSteps = -1;

  const handleNext = () => {
    if (activeStep < totalSteps) {
      setActiveStep((prevState) => prevState + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevState) => prevState - 1);
    }
  };

  const content = React.Children.map(children, (child) => {
    const childEl = child as any;
    if (childEl?.type?.name === Step.name) {
      totalSteps += 1;
      return React.cloneElement(childEl, { stepIndex: totalSteps });
    }
    return child;
  });

  return (
    <MultiStepContext.Provider
      value={{ activeStep, handleNext, handleBack, totalSteps }}
    >
      <Box {...props}>{content}</Box>
    </MultiStepContext.Provider>
  );
};

/*
 * Gives you information about current step and total steps can be customized or placed anywhere inside MultiStep Component
 */
const MultiStepPanel = ({ dots, ...props }: BoxProps & { dots?: number }) => {
  const { activeStep, totalSteps } = useMultiStep();
  return (
    <Box {...props}>
      <StepIndicator
        dots={dots}
        count={totalSteps + 1}
        currentStep={activeStep}
      />
    </Box>
  );
};

/**
 * Provides next and back button support can be passed custom button components
 */
const MultiStepNavigation = ({
  backComponent,
  nextComponent,
  ...props
}: MultiStepNavigationType) => {
  const { handleNext, handleBack, activeStep, totalSteps } = useMultiStep();

  const next = nextComponent ? (
    nextComponent({ handleNext, activeStep, totalSteps })
  ) : (
    <Box component={PrimaryButton} variant="contained" onClick={handleNext}>
      Next
    </Box>
  );

  const back = backComponent ? (
    backComponent({ handleBack, activeStep, totalSteps })
  ) : (
    <Box component={PrimaryButton} variant="text" mr={2} onClick={handleBack}>
      Back
    </Box>
  );

  return (
    <Box {...props}>
      {activeStep !== 0 && back}
      {next}
    </Box>
  );
};

export { MultiStep, MultiStepPanel, Step, MultiStepNavigation };
