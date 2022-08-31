import { Box, SwitchProps } from '@mui/material';
import { Switch } from './index';

export const Default = (props: SwitchProps) => (
  <Box maxWidth={400}>
    <Switch {...props} />
  </Box>
);

export default {
  title: 'Switch',
  component: Default,
  argTypes: {
    shadow: {
      control: 'boolean',
    },
    trackColor: {
      control: { type: 'select' },
      options: ['standard', 'light', 'grey'],
    },
  },
};
