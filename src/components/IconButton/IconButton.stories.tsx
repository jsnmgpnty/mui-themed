import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  DangerIconButton,
  IconButtonProps,
  PlainIconButton,
  PrimaryIconButton,
  PrimaryLightIconButton,
  SecondaryIconButton,
} from './index';

export default {
  title: 'Icon Button',
  argTypes: {
    round: {
      control: 'boolean',
    },
  },
};

export function Default(props: Omit<IconButtonProps, 'icon'>) {
  return (
    <Box width={360}>
      <Box mb={2}>
        <PrimaryIconButton {...props} icon={<ArrowForwardIcon />} />
      </Box>
      <Box mb={2}>
        <PrimaryLightIconButton {...props} icon={<ArrowForwardIcon />} />
      </Box>
      <Box mb={2}>
        <SecondaryIconButton {...props} icon={<ArrowForwardIcon />} />
      </Box>
      <Box mb={2}>
        <DangerIconButton {...props} icon={<ArrowForwardIcon />} />
      </Box>
      <Box mb={2}>
        <PlainIconButton {...props} icon={<ArrowForwardIcon />} />
      </Box>
    </Box>
  );
}
