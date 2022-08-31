export type LchColor = {
  l: number;
  c: number;
  h: number;
  a?: number;
};

export type LchColorSRGB = LchColor & {
  isWithinLch?: boolean;
};

export type SRGBColor = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

export type WithinLchFunctionType = (
  l: number,
  c: number,
  h: number
) => boolean;

export type LchConversionResult = {
  value: number[];
  isWithinSRGB?: boolean;
};

export type LchConvertRequest = LchColor & {
  a?: number;
  isPrecise?: boolean;
  forceinGamut?: boolean;
};

export type LchConvertToHexResult = {
  value: string;
  alpha?: number;
};

export type LchConvertToSRGBResult = {
  value: number[];
  string: string;
};
