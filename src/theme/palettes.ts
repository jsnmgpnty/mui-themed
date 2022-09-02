/* eslint-disable @typescript-eslint/naming-convention */
import { PaletteOptions } from '@mui/material';
import {
  hexToLch,
  LchConvertToSRGBResult,
  lchToHex,
  lchToRgb,
} from '../utils/lch';
import { BASE_PALETTE } from './constants';
import { BrandColorRange, ColorScale } from './types';

const COLOR_SCALES: ColorScale[] = [
  { prop: 50, value: 98 },
  { prop: 100, value: 95 },
  { prop: 200, value: 89 },
  { prop: 300, value: 79 },
  { prop: 400, value: 69 },
  { prop: 500, value: 59 },
  { prop: 600, value: 49 },
  { prop: 700, value: 39 },
  { prop: 800, value: 29 },
  { prop: 900, value: 19 },
  { prop: 950, value: 9 },
];
const OPACITY_SCALES: ColorScale[] = [
  { prop: 90, value: 90 },
  { prop: 80, value: 80 },
  { prop: 70, value: 70 },
  { prop: 60, value: 60 },
  { prop: 50, value: 50 },
  { prop: 40, value: 40 },
  { prop: 30, value: 30 },
  { prop: 20, value: 20 },
  { prop: 10, value: 10 },
];
const BLACK_COLOR_SCALE: ColorScale[] = [
  { prop: 50, value: 98, alpha: 100 },
  { prop: 100, value: 95, alpha: 100 },
  { prop: 200, value: 89, alpha: 10 },
  { prop: 300, value: 79, alpha: 20 },
  { prop: 400, value: 69, alpha: 30 },
  { prop: 500, value: 59, alpha: 40 },
  { prop: 600, value: 49, alpha: 50 },
  { prop: 700, value: 39, alpha: 60 },
  { prop: 800, value: 29, alpha: 70 },
  { prop: 900, value: 19, alpha: 80 },
  { prop: 950, value: 9, alpha: 90 },
];

const TEXT_COLOR_OPACITY_SCALES: ColorScale[] = [
  { prop: 80, value: 80 },
  { prop: 60, value: 60 },
  { prop: 40, value: 40 },
  { prop: 20, value: 20 },
];

const getBrandColorRange = (
  color: string,
  name: string,
  colorScale: ColorScale[] = COLOR_SCALES,
  basePrefix = 'base'
): BrandColorRange => {
  const brand: BrandColorRange = { [`${name}_${basePrefix}`]: color };
  const lch = hexToLch(color);
  for (const scale of colorScale) {
    const scaledColor = lchToHex({ l: scale.value, c: lch.c, h: lch.h });
    brand[`${name}_${scale.prop}`] = scaledColor.value;
  }
  return brand;
};

const getBrandColorOpacityRange = (
  color: string,
  name: string,
  opacityScales: ColorScale[] = OPACITY_SCALES,
  basePrefix = 'base',
  opacityPrefix?
): BrandColorRange => {
  const brand: BrandColorRange = { [`${name}_${basePrefix}`]: color };
  const lch = hexToLch(color);
  for (const scale of opacityScales) {
    let scaledColor: LchConvertToSRGBResult = { value: [], string: '' };
    if (scale.alpha) {
      scaledColor = lchToRgb({
        l: scale.value,
        c: lch.c,
        h: lch.h,
        a: scale.alpha,
      });
    } else {
      scaledColor = lchToRgb({
        l: lch.l,
        c: lch.c,
        h: lch.h,
        a: scale.value,
      });
    }
    const propName = opacityPrefix
      ? `${name}_${opacityPrefix}_${scale.prop}`
      : `${name}_${scale.prop}`;
    brand[propName] = scaledColor.string;
  }
  return brand;
};

export const generateColorPalette = (
  colors?: PaletteOptions
): PaletteOptions => {
  if (!colors) return BASE_PALETTE;

  const primary_brandLight = getBrandColorRange(
    '#C6FFFF',
    'primary_brandLight'
  );
  const primary_brandDark = getBrandColorRange('#310D55', 'primary_brandDark');
  const secondary_moss = getBrandColorRange('#06BEA7', 'secondary_moss');
  const secondary_grapefruit = getBrandColorRange(
    '#FFCACA',
    'secondary_grapefruit'
  );
  const secondary_watermelon = getBrandColorRange(
    '#FF6a6a',
    'secondary_watermelon'
  );
  const secondary_lilac = getBrandColorRange('#cfbcff', 'secondary_lilac');
  const secondary_grape = getBrandColorRange('#600dd0', 'secondary_grape');
  const supportive_black = getBrandColorOpacityRange(
    '#000000',
    'supportive_black',
    BLACK_COLOR_SCALE,
    undefined,
    'lightness'
  );
  const supportive_black_opacity_20 = lchToRgb({
    l: 0,
    c: 0,
    h: 0,
    a: 20,
  }).string;
  const supportive_black_opacity_90 = lchToRgb({
    l: 0,
    c: 0,
    h: 0,
    a: 90,
  }).string;
  const supportive_offBlack = getBrandColorRange(
    '#172136',
    'supportive_offBlack'
  );
  const supportive_offBlack_opacity = getBrandColorOpacityRange(
    '#172136',
    'supportive_offBlack_opacity'
  );
  const supportive_grey = getBrandColorRange('#101828', 'supportive_grey');
  const supportive_lightGrey = getBrandColorRange(
    '#f3f4fb',
    'supportive_lightGrey'
  );
  const supportive_white = getBrandColorOpacityRange(
    '#fff',
    'supportive_white'
  );
  const functional_error = getBrandColorRange('#e01e54', 'functional_error');
  const functional_warning = getBrandColorRange(
    '#ecb22e',
    'functional_warning'
  );
  const functional_success = getBrandColorRange(
    '#2eb67d',
    'functional_success'
  );
  const text_lightOnDark = getBrandColorOpacityRange(
    '#ffffff',
    'text_lightOnDark',
    TEXT_COLOR_OPACITY_SCALES,
    '100'
  );
  const text_darkOnLight = getBrandColorOpacityRange(
    '#000000',
    'text_darkOnLight',
    TEXT_COLOR_OPACITY_SCALES,
    '100'
  );
  const text_offBlackOnLight = getBrandColorOpacityRange(
    '#171236',
    'text_offBlackOnLight',
    TEXT_COLOR_OPACITY_SCALES,
    '100'
  );
  const text_brandLightOnDark = getBrandColorOpacityRange(
    '#c6ffff',
    'text_brandLightOnDark',
    TEXT_COLOR_OPACITY_SCALES,
    '100'
  );
  const text_brandDarkOnLight = getBrandColorOpacityRange(
    '#310d55',
    'text_brandDarkOnLight',
    TEXT_COLOR_OPACITY_SCALES,
    '100'
  );
  const text_link_onLight = '#600DD0';
  const text_link_onDark = '#CFBCFF';
  const background_light = '#FFFFFF';
  const background_dark = '#172136';

  return {
    ...colors,
    primary: {
      main: primary_brandDark.primary_brandDark_base,
      light: primary_brandDark.primary_brandDark_500,
      dark: primary_brandDark.primary_brandDark_950,
    },
    secondary: {
      main: secondary_moss.secondary_moss_base,
      light: secondary_moss.secondary_moss_500,
      dark: secondary_moss.secondary_moss_950,
    },
    primary_brandDark,
    primary_brandLight,
    secondary_moss,
    secondary_grapefruit,
    secondary_watermelon,
    secondary_lilac,
    secondary_grape,
    supportive_black,
    supportive_black_opacity_20,
    supportive_black_opacity_90,
    supportive_offBlack,
    supportive_offBlack_opacity,
    supportive_grey,
    supportive_lightGrey,
    supportive_white,
    functional_error,
    functional_warning,
    functional_success,
    text_lightOnDark,
    text_darkOnLight,
    text_offBlackOnLight,
    text_brandLightOnDark,
    text_brandDarkOnLight,
    text_link_onLight,
    text_link_onDark,
    background_light,
    background_dark,
  };
};

export const dark: PaletteOptions = generateColorPalette({
  mode: 'dark',
  ...BASE_PALETTE,
});

export const light: PaletteOptions = generateColorPalette({
  mode: 'light',
  ...BASE_PALETTE,
});
