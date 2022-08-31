import {
  LchColor,
  LchColorSRGB,
  LchConversionResult,
  LchConvertRequest,
  LchConvertToHexResult,
  LchConvertToSRGBResult,
  SRGBColor,
  WithinLchFunctionType,
} from '../types';
import { LCH_to_sRGB, sRGB_to_LCH } from '../drafts.csswg.org/utilities';

const DEFAULT_ARGS: LchConvertRequest = {
  l: 0,
  c: 0,
  h: 0,
  a: 100,
  forceinGamut: true,
  isPrecise: false,
};

function alphaToString(a = 100) {
  return a < 100 ? ` / ${a}%` : '';
}

function isLchWithinRgb(l: number, c: number, h: number): boolean {
  const rgb = LCH_to_sRGB([+l, +c, +h]) as Array<number>;
  const ε = 0.000005;
  return rgb.reduce((a, b) => a && b >= 0 - ε && b <= 1 + ε, true);
}

function forceIntoGamut(
  l: number,
  c: number,
  h: number,
  isLchWithin: WithinLchFunctionType
): LchColorSRGB {
  // Moves an lch color into the sRGB gamut
  // by holding the l and h steady,
  // and adjusting the c via binary-search
  // until the color is on the sRGB boundary.
  if (isLchWithin(l, c, h)) {
    return { l, c, h, isWithinLch: true };
  }

  let hiC = c;
  let loC = 0;
  const ε = 0.0001;
  c /= 2;

  // .0001 chosen fairly arbitrarily as "close enough"
  while (hiC - loC > ε) {
    if (isLchWithin(l, c, h)) {
      loC = c;
    } else {
      hiC = c;
    }
    c = (hiC + loC) / 2;
  }

  return { l, c, h, isWithinLch: false };
}

function percentToHex(percentage: number): string {
  const decimalValue = Math.round((percentage * 255) / 100);
  const hexValue =
    percentage < 7
      ? '0' + decimalValue.toString(16).toUpperCase()
      : decimalValue.toString(16).toUpperCase();
  return hexValue;
}

function calculatePercent(value: number, isPrecise = true): number {
  const result = Math.round(value * 10000) / 100;
  if (isPrecise) return result;
  return Math.round(result);
}

function getRgbPercentageFromLch(args: LchConvertRequest): LchConversionResult {
  const request = { ...DEFAULT_ARGS, ...args };
  let lchColor: LchColorSRGB = { l: request.l, c: request.c, h: request.h };
  if (request.forceinGamut) {
    const r = forceIntoGamut(request.l, request.c, request.h, isLchWithinRgb);
    lchColor = { ...lchColor, ...r };
  }
  const res = LCH_to_sRGB([
    lchColor.l,
    lchColor.c,
    lchColor.h,
  ]) as Array<number>;
  return {
    value: res.map((c) => calculatePercent(c, request.isPrecise)),
    isWithinSRGB: lchColor.isWithinLch,
  };
}

function checkSRGBBounds(r: number, g: number, b: number, a: number) {
  if (r < 0 || r > 1)
    throw 'Incorrect sRGB value! (r is out of [0,1] interval): ' + r;
  if (g < 0 || g > 1)
    throw 'Incorrect sRGB value! (g is out of [0,1] interval): ' + g;
  if (b < 0 || b > 1)
    throw 'Incorrect sRGB value! (b is out of [0,1] interval): ' + b;
  if (a < 0 || a > 1)
    throw 'Incorrect sRGB value! (a is out of [0,1] interval): ' + a;
}

function hexToSRGB(hex: string): SRGBColor {
  hex = hex.replace('#', '').toUpperCase();
  if (!hex || typeof hex !== 'string' || !hex.length)
    throw 'Incorrect Hex string format! (0)';
  if (!/^[A-F\d]+$/.test(hex)) throw 'Incorrect Hex string format! (1)';

  if (hex.length < 3) hex = hex.padStart(6, hex);
  else if (hex.length < 6) hex = hex.slice(0, 3);
  else if (hex.length === 7) hex = hex.slice(0, 6);
  else if (hex.length > 8) hex = hex.slice(0, 8);

  if (hex.length === 3) hex += hex;

  const channels = hex.match(/.{2}/g);
  if (!channels || channels.length < 3)
    throw 'Incorrect Hex string format! (2)';

  const values = channels.map((x) => parseInt(x, 16) / 255);
  if (values.some(Number.isNaN)) throw 'Incorrect Hex string format! (3)';

  const [r, g, b, a] = values;
  checkSRGBBounds(r, g, b, a ?? 1);
  return { r, g, b, a: a ?? 1 };
}

function srgbToLch(r: number, g: number, b: number, a = 1): LchColor {
  checkSRGBBounds(r, g, b, a);
  const lch = sRGB_to_LCH([r, g, b]) as Array<number>;
  const roundedLch = lch.map((v) => Math.round(v));
  return { l: roundedLch[0], c: roundedLch[1], h: roundedLch[2], a };
}

export function hexToLch(hex: string): LchColor {
  const srgb = hexToSRGB(hex);
  return srgbToLch(srgb.r, srgb.g, srgb.b, srgb.a);
}

export function lchToHex(args: LchConvertRequest): LchConvertToHexResult {
  const res = getRgbPercentageFromLch(args);
  const r = percentToHex(res.value[0]);
  const g = percentToHex(res.value[1]);
  const b = percentToHex(res.value[2]);
  return {
    value: `#${r}${g}${b}`,
    alpha: args.a,
  };
}

export function lchToRgb(args: LchConvertRequest): LchConvertToSRGBResult {
  const res = getRgbPercentageFromLch(args);
  const str =
    'rgb(' +
    res.value.map((x) => `${x}%`).join(' ') +
    alphaToString(args.a) +
    ')';
  return { value: res.value, string: str };
}
