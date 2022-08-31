import { Box, BoxProps, styled } from '@mui/material';
import { getColorFromTheme } from '../../utils/helpers';
import CompanyLogoTextOnly from './CompanyLogoTextOnly';
import CompanyLogoIconOnly from './CompanyLogoIconOnly';
import CompanyLogoFull from './CompanyLogoFull';

type CompanyLogoType = 'full' | 'icon_only' | 'text_only';

export type CompanyLogoProps = BoxProps & {
  type?: CompanyLogoType;
};

const getDefaultSizeByType = (
  type: CompanyLogoType = 'full',
  width?: number,
  height?: number
) => {
  switch (type) {
    case 'icon_only':
      return { width: width ?? 23.47, height: height ?? 32 };
    case 'text_only':
      return { width: width ?? 43.74, height: height ?? 11.75 };
    default:
      return { width: width ?? 123, height: height ?? 32 };
  }
};

const LogoContainer = styled(
  ({
    type: _t,
    color: _c,
    width: _w,
    height: _h,
    ...props
  }: CompanyLogoProps) => <Box component="span" {...props} />
)(({ theme, type, color, width, height }: any) => ({
  display: 'inline-block',
  color: getColorFromTheme(
    theme,
    color || 'primary_brandDark.primary_brandDark_base'
  ),
  ...getDefaultSizeByType(type, width, height),
}));

export const CompanyLogo = ({
  color,
  type = 'full',
  ...props
}: CompanyLogoProps) => (
  <LogoContainer color={color} type={type} {...props}>
    {type === 'full' && <CompanyLogoFull />}
    {type === 'icon_only' && <CompanyLogoIconOnly />}
    {type === 'text_only' && <CompanyLogoTextOnly />}
  </LogoContainer>
);
