import { Box, FormControlLabel, RadioGroup, RadioProps } from '@mui/material';
import { Radio } from './index';

export const Default = (props: RadioProps) => (
  <Box maxWidth={400}>
    <RadioGroup>
      <FormControlLabel
        value="First"
        control={<Radio {...props} />}
        label="First"
      />
      <FormControlLabel
        value="Second"
        control={<Radio {...props} />}
        label="Second"
      />
      <FormControlLabel
        value="Third"
        control={<Radio {...props} />}
        label="Third"
      />
    </RadioGroup>
  </Box>
);

export default {
  title: 'Radio',
  component: Default,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};
