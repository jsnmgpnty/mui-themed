import { Box } from '@mui/material';
import { MenuItem } from './MenuItem';
import { Select, SelectProps } from './index';

export function Default(props: SelectProps) {
  return (
    <Box maxWidth={500}>
      <Select defaultValue={10} {...props}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </Box>
  );
}

export default {
  title: 'Select',
  component: Default,
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
  },
};
