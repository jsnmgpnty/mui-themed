import { Box, CardContent } from '@mui/material';
import { PrimaryButton } from '../Button';
import { Card } from '../Card';
import { TextMd, DisplayLg } from '../Text';
import { MultiStep, MultiStepPanel, MultiStepNavigation, Step } from './index';

type StoryProps = {
  hasCustomButtons?: boolean;
};

export const Default = (props: StoryProps) => {
  const renderNavigation = () => {
    if (props.hasCustomButtons) {
      return (
        <MultiStepNavigation
          mt={4}
          nextComponent={({ handleNext }) => (
            <PrimaryButton variant="outlined" onClick={handleNext}>
              Next
            </PrimaryButton>
          )}
          backComponent={({ handleBack }) => (
            <Box
              component={PrimaryButton}
              variant="outlined"
              mr={2}
              onClick={handleBack}
            >
              Back
            </Box>
          )}
        />
      );
    } else {
      return <MultiStepNavigation mt={4} />;
    }
  };

  return (
    <Box maxWidth={800}>
      <MultiStep mt={3}>
        <Box display="flex" justifyContent="center">
          <MultiStepPanel mb={4} />
        </Box>
        {Array.from(Array(5).keys()).map((j) => (
          <Step key={j}>
            <Box display="flex" justifyContent="center">
              <Box component={Card} maxWidth={400}>
                <CardContent>
                  <DisplayLg mt={0} mb={2}>
                    Step {j + 1}
                  </DisplayLg>
                  <TextMd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </TextMd>
                </CardContent>
              </Box>
            </Box>
          </Step>
        ))}
        <Box display="flex" justifyContent="flex-end">
          {renderNavigation()}
        </Box>
      </MultiStep>
    </Box>
  );
};

export default {
  title: 'Multi Step',
  component: Default,
  argTypes: {
    hasCustomButtons: {
      control: 'boolean',
    },
  },
};
