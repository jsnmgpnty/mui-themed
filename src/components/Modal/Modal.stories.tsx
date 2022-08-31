import { Box } from '@mui/material';
import { useState } from 'react';
import { PrimaryButton } from '../Button';
import { TextMd, DisplayLg } from '../Text';
import Modal, { DialogProps } from './index';

export const Default = (props: DialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Box maxWidth={800}>
      <PrimaryButton onClick={() => setOpen(true)}>Open modal</PrimaryButton>
      <Modal {...props} open={open} onClose={() => setOpen(false)}>
        <DisplayLg mt={0} mb={2}>
          Hello there
        </DisplayLg>
        <TextMd>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </TextMd>
      </Modal>
    </Box>
  );
};

export default {
  title: 'Modal',
  component: Default,
  argTypes: {
    dockToBottom: {
      control: 'boolean',
    },
    borderType: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    minWidth: {
      control: 'number',
    },
    maxWidth: {
      control: 'number',
    },
  },
};
