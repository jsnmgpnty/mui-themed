import {
  styled as muiStyled,
  Avatar as MuiAvatar,
  Box,
  BoxProps as MuiBoxProps,
} from '@mui/material';
import { ITheme } from '@mui/styles';
import { TextMd } from '../Text';

export enum AvatarBorderType {
  styled = 'styled',
  light = 'light',
}

export type AvatarProps = MuiBoxProps & {
  src: string;
  alt?: string;
  diameter?: number;
  title?: string;
  subtitle?: string;
  border?: AvatarBorderType;
  shadow?: boolean;
};

const getBorderStyle = (
  theme: ITheme,
  borderType?: AvatarBorderType
): string => {
  if (borderType === AvatarBorderType.styled) {
    return `${theme.spacing(0.5)} solid ${theme.palette.borders.styled}`;
  }
  if (borderType === AvatarBorderType.light) {
    return `${theme.spacing(0.5)} solid ${theme.palette.background.default}`;
  }
  return 'none';
};

const AvatarIcon = muiStyled(
  ({ diameter: _d, border: _b, shadow: _s, ...props }: AvatarProps) => (
    <Box component={MuiAvatar} {...props} />
  )
)(
  ({
    theme,
    diameter,
    border,
    shadow,
  }: {
    theme: ITheme;
    diameter?: number;
    border?: AvatarBorderType;
    shadow?: boolean;
  }) => ({
    width: diameter ?? 40,
    height: diameter ?? 40,
    border: getBorderStyle(theme, border),
    boxShadow: shadow ? theme.customShadows.md : undefined,
  })
);

const getFontSize = (diameter?: number): string | number => {
  if (!diameter) return 'initial';
  if (diameter > 40) return diameter / 2 - 16;
  return 'initial';
};

export const Avatar = (props: AvatarProps) => (
  <Box display="flex" alignItems="center">
    <AvatarIcon {...props} />
    {(props?.title || props?.subtitle) && (
      <Box ml={1}>
        {props.title && (
          <TextMd
            bold="medium"
            my={0}
            fontSize={getFontSize(props.diameter)}
            lineHeight={1}
          >
            {props.title}
          </TextMd>
        )}
        {props.subtitle && (
          <TextMd
            my={0}
            color="gray"
            fontSize={getFontSize(props.diameter)}
            lineHeight={1}
            mt={1}
          >
            {props.subtitle}
          </TextMd>
        )}
      </Box>
    )}
  </Box>
);
