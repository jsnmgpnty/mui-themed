import { Theme } from '@mui/styles';
import { PaletteColorOptions, PaletteOptions } from '@mui/material';
import { BrandColorRange } from '../theme/types';

declare module '@mui/material' {
  export interface PaletteOptions {
    borders?: {
      styled?: string;
    };
    primary_brandLight?: BrandColorRange;
    primary_brandDark?: BrandColorRange;
    secondary_moss?: BrandColorRange;
    secondary_grapefruit?: BrandColorRange;
    secondary_watermelon?: BrandColorRange;
    secondary_lilac?: BrandColorRange;
    secondary_grape?: BrandColorRange;
    supportive_black?: BrandColorRange;
    supportive_black_opacity_20?: string;
    supportive_black_opacity_90?: string;
    supportive_offBlack?: BrandColorRange;
    supportive_offBlack_opacity?: BrandColorRange;
    supportive_grey?: BrandColorRange;
    supportive_lightGrey?: BrandColorRange;
    supportive_white?: BrandColorRange;
    functional_error?: BrandColorRange;
    functional_warning?: BrandColorRange;
    functional_success?: BrandColorRange;
    text_lightOnDark?: BrandColorRange;
    text_darkOnLight?: BrandColorRange;
    text_offBlackOnLight?: BrandColorRange;
    text_brandLightOnDark?: BrandColorRange;
    text_brandDarkOnLight?: BrandColorRange;
    text_link_onLight?: string;
    text_link_onDark?: string;
    background_light?: string;
    background_dark?: string;
    // Ungrouped colors
    titanWhite?: string;
    ballBlue?: PaletteColorOptions;
  }

  export interface ThemeOptions {
    cornerRadius?: {
      sm: ?number;
      md: ?number;
      lg: ?number;
    };
    customShadows?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      xl2?: string;
      xl3?: string;
    };
    blurs?: {
      light?: {
        sm?: {
          background?: string;
          backdropFilter?: string;
        };
        md?: {
          background?: string;
          backdropFilter?: string;
        };
        lg?: {
          background?: string;
          backdropFilter?: string;
        };
        xl?: {
          background?: string;
          backdropFilter?: string;
        };
      };
      dark?: {
        sm?: {
          background?: string;
          backdropFilter?: string;
        };
        md?: {
          background?: string;
          backdropFilter?: string;
        };
        lg?: {
          background?: string;
          backdropFilter?: string;
        };
        xl?: {
          background?: string;
          backdropFilter?: string;
        };
      };
    };
    focused?: {
      [key: string]: string;
    };
  }
}

declare module '@mui/styles' {
  export type ITheme = Theme & {
    palette: PaletteOptions;
    assetsPath?: string;
    cornerRadius?: {
      sm: ?number;
      md: ?number;
      lg: ?number;
    };
  };
}
