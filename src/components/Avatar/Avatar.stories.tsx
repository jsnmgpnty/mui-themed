import { Box } from '@mui/material';
import { Avatar, AvatarProps } from './index';

export default {
  title: 'Avatar',
  argTypes: {
    diameter: {
      control: 'number',
    },
    border: {
      control: { type: 'select' },
      options: ['light', 'styled', 'none'],
    },
    shadow: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
  },
};

export function Default(props: Omit<AvatarProps, 'src'>) {
  return (
    <Box width={800}>
      <Avatar src="https://i.pravatar.cc/320" {...props} />
    </Box>
  );
}
