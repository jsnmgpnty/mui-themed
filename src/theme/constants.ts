import { PaletteOptions } from '@mui/material';

export const MAX_FORM_WIDTH = 360;
export const BOX_SHADOW = {
  LOW: '0px 2px 4px rgba(0, 0, 0, 0.24)',
  MEDIUM: '0px 6px 16px rgba(0, 0, 0, 0.08)',
  HIGH: '0px 12px 32px rgba(0, 0, 0, 0.16)',
  BUTTON_PRESSED: 'inset 0px 1px 4px rgba(0,0,0,0.2)',
};

export const BASE_PALETTE: PaletteOptions = {
  primary: {
    main: '#310d55',
    light: '#8C63B2',
    dark: '#13002c',
  },
  secondary: {
    main: '#08bea8',
    light: '#5ff1d9',
    dark: '##008d79',
  },
  grey: {
    [50]: '#F9FAFB',
    [200]: '#E4E7EC',
  },
  borders: {
    styled: '#C0E8F2',
  },
  ballBlue: {
    main: '#2CB1D0',
    light: '##80D0E2',
  },
  titanWhite: '#F4EBFF',
};
