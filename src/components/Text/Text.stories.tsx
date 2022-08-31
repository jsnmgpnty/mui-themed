import { Box } from '@mui/material';
import {
  TextProps,
  Display2XL,
  DisplayXL,
  DisplayLg,
  DisplayMd,
  DisplaySm,
  DisplayXs,
  DisplayXxs,
  TextXL,
  TextLg,
  TextSm,
  TextMd,
  TextXs,
} from './index';

export default {
  title: 'Typography',
  argTypes: {
    bold: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
  },
};

export const Default = (props: TextProps) => (
  <Box>
    <Display2XL {...props}>Display 2XL</Display2XL>
    <DisplayXL {...props}>Display XL</DisplayXL>
    <DisplayLg {...props}>Display Large</DisplayLg>
    <DisplayMd {...props}>Display Medium</DisplayMd>
    <DisplaySm {...props}>Display Small</DisplaySm>
    <DisplayXs {...props}>Display XS</DisplayXs>
    <DisplayXxs {...props}>Display XXS</DisplayXxs>
    <TextXL {...props}>Text XL</TextXL>
    <TextLg {...props}>Text Large</TextLg>
    <TextMd {...props}>Text Medium</TextMd>
    <TextSm {...props}>Text Small</TextSm>
    <TextXs {...props}>Text Extra Small</TextXs>
  </Box>
);
