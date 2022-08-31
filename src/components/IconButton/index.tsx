import React, { ForwardedRef, ReactElement } from 'react';
import {
  styled,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  darken,
} from '@mui/material';
import { ITheme } from '@mui/styles';

export type IconButtonProps = MuiIconButtonProps & {
  round?: boolean;
  icon: ReactElement<any, any>;
};

export const IconButton = styled(
  ({ round: _, icon, ...props }: IconButtonProps) => (
    <MuiIconButton {...props}>{icon}</MuiIconButton>
  )
)(
  ({ theme, round }) =>
    ({
      borderRadius: round ? '50%' : theme.shape.borderRadius,
      color: theme.palette.background.default,
    } as any)
);

export const PrimaryIconButton = styled(
  React.forwardRef(
    (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
      <IconButton {...props} ref={ref} />
    )
  )
)(({ theme }: { theme: ITheme }) => ({
  backgroundColor: theme.palette.primary.main,
  '&:hover, &:active, &:focus': {
    backgroundColor: darken(theme.palette.primary.main, 0.1),
  },
}));

export const PrimaryLightIconButton = styled(
  React.forwardRef(
    (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
      <IconButton {...props} ref={ref} />
    )
  )
)(({ theme }: { theme: ITheme }) => ({
  backgroundColor: theme.palette.primary.light,
  '&:hover, &:active, &:focus': {
    backgroundColor: darken(theme.palette.primary.light, 0.1),
  },
}));

export const SecondaryIconButton = styled(
  React.forwardRef(
    (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
      <IconButton {...props} ref={ref} />
    )
  )
)(({ theme }: { theme: ITheme }) => ({
  backgroundColor: theme.palette.secondary.main,
  '&:hover, &:active, &:focus': {
    backgroundColor: darken(theme.palette.secondary.main, 0.1),
  },
}));

export const DangerIconButton = styled(
  React.forwardRef(
    (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
      <IconButton {...props} ref={ref} />
    )
  )
)(({ theme }: { theme: ITheme }) => ({
  backgroundColor: theme.palette.error.main,
  '&:hover, &:active, &:focus': {
    backgroundColor: darken(theme.palette.error.main, 0.1),
  },
}));

export const PlainIconButton = styled(
  React.forwardRef(
    (props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
      <IconButton {...props} ref={ref} />
    )
  )
)(({ theme }: { theme: ITheme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow:
    '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
}));
