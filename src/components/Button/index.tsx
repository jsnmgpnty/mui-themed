/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ForwardedRef, ReactElement } from 'react';
import {
  Box,
  styled,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from '@mui/material';
import { ITheme } from '@mui/styles';
import { Typography } from '../../theme';
import { getColorFromTheme } from '../../utils/helpers';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ButtonProps = Omit<MuiButtonProps, 'color' | 'size'> & {
  loading?: boolean;
  loadingContent?: ReactElement<any, any>;
  fullWidth?: boolean;
  size?: ButtonSize;
  color?: string;
};

type InternalButtonProps = ButtonProps & {
  backgroundColor?: string;
  hoverShadow?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
};

const getSizeAndSpacing = (
  theme: any,
  size?: ButtonSize,
  fullWidth?: boolean
) => {
  const width = fullWidth ? '100%' : 'auto';
  switch (size) {
    case 'sm':
      return {
        width,
        padding: `${theme.spacing(1.25)} ${theme.spacing(2)}`,
        ...Typography.textSm,
      };
    case 'lg':
      return {
        width,
        padding: `${theme.spacing(1.75)} ${theme.spacing(2.5)}`,
        ...Typography.textMd,
      };
    case 'xl':
      return {
        width,
        padding: `${theme.spacing(2)} ${theme.spacing(2.75)}`,
        ...Typography.textLg,
      };
    case 'xxl':
      return {
        width,
        padding: `${theme.spacing(2.5)} ${theme.spacing(3.75)}`,
        ...Typography.textXL,
      };
    default:
      return {
        width,
        padding: `${theme.spacing(1.5)} ${theme.spacing(2.25)}`,
        ...Typography.textMd,
      };
  }
};

export const Button = styled(
  ({
    loading,
    loadingContent,
    fullWidth: _f,
    size: _s,
    color: _c,
    backgroundColor: _b,
    borderColor: _bc,
    hoverBackgroundColor: _h,
    children,
    ...props
  }: InternalButtonProps) => (
    <MuiButton {...props}>
      {!loading && children}
      {loading && !!loadingContent && loadingContent}
      {loading && !loadingContent && (
        <>
          <Box display="flex" alignItems="center" mr={1}>
            <CircularProgress size={16} color="inherit" />
          </Box>
          {children}
        </>
      )}
    </MuiButton>
  )
)(
  ({
    theme,
    fullWidth,
    size = 'md',
    color,
    backgroundColor,
    hoverBackgroundColor,
    borderColor,
    hoverShadow,
  }: InternalButtonProps & { theme: ITheme }) => ({
    fontWeight: 500,
    color: getColorFromTheme(
      theme,
      color || 'supportive_white.supportive_white_base'
    ),
    backgroundColor: getColorFromTheme(
      theme,
      backgroundColor || 'primary_brandDark.primary_brandDark_900'
    ),
    border: `1px solid ${getColorFromTheme(
      theme,
      borderColor ||
        backgroundColor ||
        'primary_brandDark.primary_brandDark_900'
    )}`,
    boxShadow: 'none',
    ...getSizeAndSpacing(theme, size, fullWidth),
    '&.Mui-disabled': {
      color: getColorFromTheme(
        theme,
        color || 'supportive_white.supportive_white_base'
      ),
      backgroundColor: getColorFromTheme(
        theme,
        backgroundColor || 'primary_brandDark.primary_brandDark_900'
      ),
      border: `1px solid ${getColorFromTheme(
        theme,
        borderColor ||
          backgroundColor ||
          'primary_brandDark.primary_brandDark_900'
      )}`,
      opacity: 0.25,
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: getColorFromTheme(
        theme,
        hoverBackgroundColor || 'priamry_brandDark.primary_brandDark_base'
      ),
    },
    '&:active, &:focus': {
      boxShadow: hoverShadow ? theme?.focused?.[hoverShadow] : 'none',
    },
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(1.25),
    },
    '& .MuiButton-endIcon': {
      marginLeft: theme.spacing(1.25),
    },
  })
);

export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'contained', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <Button
      {...props}
      variant={variant}
      ref={ref}
      color="text_lightOnDark.text_lightOnDark_100"
      backgroundColor="primary_brandDark.primary_brandDark_900"
      hoverBackgroundColor="primary_brandDark.primary_brandDark_base"
      hoverShadow="primary_100_xs"
    />
  )
);

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'contained', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <Button
      {...props}
      variant={variant}
      ref={ref}
      color="primary_brandDark.primary_brandDark_800"
      backgroundColor="primary_brandDark.primary_brandDark_100"
      borderColor="primary_brandDark.primary_brandDark__100"
      hoverBackgroundColor="primary_brandDark.primary_brandDark_200"
      hoverShadow="primary_100_xs"
    />
  )
);

export const SecondaryGrayButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { variant = 'contained', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <Button
      {...props}
      variant={variant}
      ref={ref}
      color="supportive_offBlack.supportive_offBlack_base"
      backgroundColor="supportive_white.supportive_white_base"
      borderColor="supportive_offBlack.supportive_offBlack_300"
      hoverBackgroundColor="supportive_offBlack.supportive_offBlack_50"
    />
  )
);

export const TertiaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'contained', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <Button
      {...props}
      variant={variant}
      ref={ref}
      color="primary_brandDark.primary_brandDark_800"
      backgroundColor="supportive_white.supportive_white_base"
      hoverBackgroundColor="primary_brandDark.primary_brandDark_100"
    />
  )
);

export const TertiaryGrayButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { variant = 'contained', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <Button
      {...props}
      variant={variant}
      ref={ref}
      color="text_offBlackOnLight.text_offBlackOnLight_100"
      backgroundColor="supportive_white.supportive_white_base"
      hoverBackgroundColor="supportive_offBlack.supportive_offBlack_50"
    />
  )
);

export const DangerButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'contained', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <Button
      {...props}
      variant={variant}
      ref={ref}
      color="supportive_white.supportive_white_base"
      backgroundColor="functional_error.functional_error_base"
      hoverBackgroundColor="functional_error.functional_error_700"
      hoverShadow="error_100_xs"
    />
  )
);
