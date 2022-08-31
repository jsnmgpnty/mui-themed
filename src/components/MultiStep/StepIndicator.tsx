import { Done } from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';
import { BoxProps } from '@mui/system';
import { useIsMobileView } from '../../utils/helpers';

type StepDotType = BoxProps & {
  isCompleted: boolean;
};

type StepNumberType = BoxProps & {
  index: number;
  isActive: boolean;
  isCompleted: boolean;
};

type StepIndicatorType = BoxProps & {
  count: number;
  currentStep: number;
  dots?: number;
};

const StepDot = ({ isCompleted, ...props }: StepDotType) => {
  const theme = useTheme();
  return (
    <Box
      height={4}
      width={4}
      borderRadius={5}
      mr={2}
      bgcolor={
        isCompleted ? theme.palette.secondary.main : theme.palette.grey[400]
      }
      {...props}
    />
  );
};

const StepNumber = ({
  index,
  isActive,
  isCompleted,
  ...props
}: StepNumberType) => {
  const theme = useTheme();
  return (
    <Box
      height={28}
      width={28}
      borderRadius={16}
      mr={2}
      bgcolor={
        isActive || isCompleted
          ? theme.palette.secondary.main
          : theme.palette.grey[400]
      }
      {...props}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color={theme.palette.common.white}
      border={`2px solid ${theme.palette.common.white}`}
      boxShadow="0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)"
    >
      {isCompleted ? <Done width={8} /> : index}
    </Box>
  );
};

const StepIndicator = ({
  count = 1,
  currentStep = 0,
  dots,
  ...props
}: StepIndicatorType) => {
  const isMobile = useIsMobileView();

  const renderDots = (i: number) => {
    const numberOfDots = isMobile ? 3 : dots ?? 8;
    return Array.from(Array(numberOfDots).keys()).map((j) => (
      <StepDot isCompleted={i < currentStep} key={j} />
    ));
  };

  return (
    <Box display="flex" {...props}>
      {Array.from(Array(count).keys()).map((i) => (
        <Box key={i} display="flex" alignItems="center">
          <StepNumber
            index={i + 1}
            isActive={i === currentStep}
            isCompleted={i < currentStep}
          />
          {i + 1 < count && renderDots(i)}
        </Box>
      ))}
    </Box>
  );
};

export default StepIndicator;
