/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import { Typography } from '../../theme';
import { useIsMobileView } from '../../utils/helpers';

export type TextProps = BoxProps & {
  bold?: 'regular' | 'medium' | 'semibold' | 'bold' | boolean;
};

const getFontWeight = (
  bold?: 'regular' | 'medium' | 'semibold' | 'bold' | boolean
): number | string => {
  switch (bold) {
    case 'regular':
      return 400;
    case true:
    case 'medium':
      return 500;
    case 'semibold':
      return 600;
    case 'bold':
      return 700;
    default:
      return 'fontWeightRegular';
  }
};

export const Display2XL = ({ bold, ...props }: TextProps) => (
  <Box
    component="h1"
    {...Typography[useIsMobileView() ? 'displayXL' : 'display2XL']}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const DisplayXL = ({ bold, ...props }: TextProps) => (
  <Box
    component="h1"
    {...Typography[useIsMobileView() ? 'displayLg' : 'displayXL']}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const DisplayLg = ({ bold, ...props }: TextProps) => (
  <Box
    component="h2"
    {...Typography[useIsMobileView() ? 'displayMd' : 'displayLg']}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const DisplayMd = ({ bold, ...props }: TextProps) => (
  <Box
    component="h3"
    {...Typography[useIsMobileView() ? 'displaySm' : 'displayMd']}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const DisplaySm = ({ bold, ...props }: TextProps) => (
  <Box
    component="h4"
    {...Typography[useIsMobileView() ? 'displayXs' : 'displaySm']}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const DisplayXs = ({ bold, ...props }: TextProps) => (
  <Box
    component="h5"
    {...Typography[useIsMobileView() ? 'displayXxs' : 'displayXs']}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const DisplayXxs = ({ bold, ...props }: TextProps) => (
  <Box
    component="h6"
    {...Typography.displayXxs}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const TextXL = ({ bold, ...props }: TextProps) => (
  <Box
    component="p"
    {...Typography.textXL}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const TextLg = ({ bold, ...props }: TextProps) => (
  <Box
    component="p"
    {...Typography.textLg}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const TextMd = ({ bold, ...props }: TextProps) => (
  <Box
    component="p"
    {...Typography.textMd}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const TextSm = ({ bold, ...props }: TextProps) => (
  <Box
    component="p"
    {...Typography.textSm}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);

export const TextXs = ({ bold, ...props }: TextProps) => (
  <Box
    component="p"
    {...Typography.textXs}
    fontWeight={getFontWeight(bold)}
    {...props}
  />
);
