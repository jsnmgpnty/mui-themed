import { Box } from '@mui/material';
import { Icon } from '../Icon';
import { Link, LinkProps } from './index';

export default {
  title: 'Link',
  argTypes: {
    hasStartIcon: {
      control: 'boolean',
    },
    hasEndIcon: {
      control: 'boolean',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'gray'],
    },
  },
};

export function Default(
  props: LinkProps & { hasStartIcon?: boolean; hasEndIcon?: boolean }
) {
  const startIcon = props.hasStartIcon ? (
    <Icon icon="general.search-sm" />
  ) : undefined;
  const endIcon = props.hasEndIcon ? (
    <Icon icon="general.menu-01" />
  ) : undefined;
  return (
    <Box width="100%" flexDirection="column" display="flex" flexWrap="wrap">
      <Box mb={2}>
        <Link
          startIcon={startIcon}
          endIcon={endIcon}
          href="https://www.google.com"
          underline="none"
          target="_blank"
          {...props}
        >
          I am a clickable link
        </Link>
      </Box>
    </Box>
  );
}
