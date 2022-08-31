import { Box } from '@mui/material';
import { useState } from 'react';
import Picker, { PickerProps, PickerOption } from './index';

const OPTIONS: PickerOption[] = [
  { label: 'Send via SMS', value: 0 },
  { label: 'Send via Email', value: 1 },
  { label: 'Send via Stork', value: 2 },
];

export function Default(props: PickerProps) {
  const [selected, setSelected] = useState(0);

  return (
    <Box maxWidth={500}>
      <Picker
        {...props}
        options={OPTIONS}
        selected={selected}
        onSelect={(val) => setSelected(+val)}
      />
    </Box>
  );
}

export default {
  title: 'Picker',
  component: Default,
};
