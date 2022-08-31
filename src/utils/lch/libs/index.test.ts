import { lchToHex, hexToLch } from './index';

const COLOR_SCALES = [
  { label: '50', value: 98 },
  { label: '100', value: 95 },
  { label: '200', value: 89 },
  { label: '300', value: 79 },
  { label: '400', value: 69 },
  { label: '500', value: 59 },
  { label: '600', value: 49 },
  { label: '700', value: 39 },
  { label: '800', value: 29 },
  { label: '900', value: 19 },
  { label: '950', value: 9 },
];

const BASE_COLORS = [
  {
    label: 'primary light',
    value: '#C6FFFF',
    expectedValue: { l: 96, c: 20, h: 198, a: 1 },
    expectedValues: [
      '#E3FFFF',
      '#C2FCFC',
      '#B0EBEB',
      '#96CFCF',
      '#7AB3B3',
      '#619999',
      '#477D7D',
      '#2E6666',
      '#0F4D4D',
      '#003636',
      '#001F1F',
    ],
  },
  {
    label: 'primary dark',
    value: '#310D55',
    expectedValue: { l: 13, c: 47, h: 309, a: 1 },
    expectedValues: [
      '#FCF7FF',
      '#F7EDFF',
      '#EDD9FF',
      '#DEB5FF',
      '#C496EB',
      '#A87DCF',
      '#8C63B3',
      '#734A99',
      '#59337D',
      '#401C63',
      '#29054D',
    ],
  },
  {
    label: 'moss',
    value: '#06BEA7',
    expectedValue: { l: 69, c: 46, h: 180, a: 1 },
    expectedValues: [
      '#E6FFFA',
      '#B8FFF0',
      '#63F7DE',
      '#40DBC2',
      '#00BFA6',
      '#00A18C',
      '#008573',
      '#00695C',
      '#004F42',
      '#00362E',
      '#001F1A',
    ],
  },
  {
    label: 'grapefruit',
    value: '#FFCACA',
    expectedValue: { l: 86, c: 21, h: 21, a: 1 },
    expectedValues: [
      '#FFF7F7',
      '#FFEDED',
      '#FFD6D6',
      '#EBB5B8',
      '#CF9C9C',
      '#B38282',
      '#966969',
      '#7D4F52',
      '#63383B',
      '#4A2124',
      '#330D0F',
    ],
  },
  {
    label: 'watermelon',
    value: '#FF6A6A',
    expectedValue: { l: 65, c: 65, h: 28, a: 1 },
    expectedValues: [
      '#FFF7F7',
      '#FFEDEB',
      '#FFD6D1',
      '#FFADA8',
      '#FF827D',
      '#ED5C5C',
      '#CF3D45',
      '#B01C2E',
      '#8C001F',
      '#610012',
      '#3B0300',
    ],
  },
  {
    label: 'lilac',
    value: '#CFBCFF',
    expectedValue: { l: 80, c: 35, h: 299, a: 1 },
    expectedValues: [
      '#FAF7FF',
      '#F5EDFF',
      '#E6DBFF',
      '#CFBAFC',
      '#B39EE0',
      '#9685C4',
      '#7D6BA8',
      '#63548F',
      '#4A3D75',
      '#33265C',
      '#1A1242',
    ],
  },
  {
    label: 'grape',
    value: '#600DD0',
    expectedValue: { l: 31, c: 103, h: 307, a: 1 },
    expectedValues: [
      '#FCF7FF',
      '#F7EDFF',
      '#EDD9FF',
      '#D9B5FF',
      '#C791FF',
      '#B06EFF',
      '#9647FF',
      '#7A29E6',
      '#5C00C9',
      '#40008F',
      '#240059',
    ],
  },
];

describe('Convert hex to LCH', () => {
  BASE_COLORS.forEach((color) => {
    it(`should convert ${color.label} to lch`, () => {
      const result = hexToLch(color.value);
      expect(result).toMatchObject(color.expectedValue);
    });
  });
});

describe('Convert LCH to hex', () => {
  BASE_COLORS.forEach((color) => {
    COLOR_SCALES.forEach((scale, i) => {
      it(`should convert ${color.label} ${scale.label} color to hex`, () => {
        const lch = hexToLch(color.value);
        const result = lchToHex({ l: scale.value, c: lch.c, h: lch.h });
        expect(result.value).toBe(color.expectedValues[i]);
      });
    });
  });
});
