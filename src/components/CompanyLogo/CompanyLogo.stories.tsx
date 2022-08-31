import { Box } from '@mui/material';
import { CompanyLogo, CompanyLogoProps } from './index';

export default {
  title: 'Company Logo',
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    type: {
      control: { type: 'select' },
      options: ['full', 'icon_only', 'text_only'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary_brandDark.primary_brandDark_base',
        'primary_brandLight.primary_brandLight_base',
        'supportive_black.supportive_black_base',
        'supportive_white.supportive_white_base',
      ],
    },
  },
};

export function Default(props: CompanyLogoProps) {
  return (
    <Box width="100%" flexDirection="column" display="flex">
      <Box mb={2}>
        <CompanyLogo {...props} mr={2} />
      </Box>
    </Box>
  );
}
