import { Box, TooltipProps } from '@mui/material';
import { Icon } from '../Icon';
import { PrimaryIconButton } from '../IconButton';
import { DisplayXs, TextMd } from '../Text';
import { Tooltip } from './index';

const TooltipContent = () => (
  <Box p={2}>
    <DisplayXs mt={0} mb={1}>
      Title
    </DisplayXs>
    <TextMd>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat
    </TextMd>
  </Box>
);

export const Default = (props: TooltipProps) => (
  <Box
    width="100%"
    height="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Box textAlign="center">
      <TextMd>Hover over the icon</TextMd>
      <Tooltip {...props} title={<TooltipContent />}>
        <PrimaryIconButton icon={<Icon icon="general.activity" />} round />
      </Tooltip>
    </Box>
  </Box>
);

export default {
  title: 'Tooltip',
  component: Default,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['dark', 'light'],
    },
    arrow: {
      control: 'boolean',
    },
    placement: {
      control: { type: 'select' },
      options: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
      ],
    },
  },
};
