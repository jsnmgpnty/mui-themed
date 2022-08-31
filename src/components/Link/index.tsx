import {
  Box,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  styled,
} from '@mui/material';
import { ITheme } from '@mui/styles';
import { PropsWithChildren } from 'react';

export type LinkProps = Omit<MuiLinkProps, 'color'> & {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  color?: 'primary' | 'gray';
};

const Component = ({
  startIcon,
  endIcon,
  children,
  color: _,
  ...props
}: PropsWithChildren<LinkProps>) => (
  <MuiLink {...props}>
    {startIcon && (
      <Box component="span" mr={1}>
        {startIcon}
      </Box>
    )}
    {children}
    {endIcon && (
      <Box component="span" ml={1}>
        {endIcon}
      </Box>
    )}
  </MuiLink>
);

const Link = styled(Component)(
  ({ theme, color }: { theme?: ITheme; color?: 'primary' | 'gray' }) => ({
    display: 'flex',
    alignItems: 'center',
    color:
      color === 'primary'
        ? theme.palette.text_link_onLight
        : theme.palette.text_offBlackOnLight.text_offBlackOnLight_60,
    '&:hover': {
      color:
        color === 'primary'
          ? theme.palette.secondary_grape.secondary_grape_900
          : theme.palette.text_offBlackOnLight.text_offBlackOnLight_80,
    },
    '&:active, &:focus': {
      color:
        color === 'primary'
          ? theme.palette.secondary_grape.secondary_grape_950
          : theme.palette.text_offBlackOnLight.text_offBlackOnLight_100,
    },
  })
);

export { Link };
