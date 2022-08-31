import { PaletteColorOptions } from '@mui/material';

export type BrandColorRange = PaletteColorOptions & {
  [key: string]: string;
};

export type ColorScale = {
  prop: keyof BrandColorRange;
  value: number;
  alpha?: number;
};
