import { Box } from '@mui/material';
import { useState } from 'react';
import { VerifyCodeField, VerifyCodeFieldProps } from './index';

export function Default(props: VerifyCodeFieldProps) {
  const [value, setValue] = useState('1234');
  return (
    <Box maxWidth={500}>
      <VerifyCodeField
        {...props}
        value={value}
        onChange={(v: string) => setValue(v)}
      />
    </Box>
  );
}

export default {
  title: 'Verify Code Field',
  component: Default,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
};
