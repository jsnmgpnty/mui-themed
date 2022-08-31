import { Box, FormControlLabel } from '@mui/material';
import { Checkbox, CheckboxProps } from './index';

export const Default = (props: CheckboxProps) => (
  <Box maxWidth={400}>
    <FormControlLabel control={<Checkbox {...props} />} label="Checkbox" />
  </Box>
);

export default {
  title: 'Checkbox',
  component: Default,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    useDash: {
      control: 'boolean',
    },
  },
};
