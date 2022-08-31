import { Box } from '@mui/material';
import { DisplayLg } from '../Text';
import { Icon, IconProps } from './index';

export default {
  title: 'Icon',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'functional_success.functional_success_base',
        'functional_error.functional_error_base',
        'functional_warning.functional_warning_base',
      ],
    },
  },
};

export function Default(props: Omit<IconProps, 'icon'>) {
  return (
    <Box width="100%" flexDirection="column" display="flex" flexWrap="wrap">
      <DisplayLg>Icons</DisplayLg>
      <Box mb={2}>
        <Icon {...props} mr={2} icon="general.activity" />
        <Icon {...props} mr={2} icon="general.check-circle" />
        <Icon {...props} mr={2} icon="general.edit-01" />
        <Icon {...props} mr={2} icon="general.heart" />
        <Icon {...props} mr={2} icon="general.tool-01" />
      </Box>
    </Box>
  );
}
