import {
  responsiveFontSizes,
  createTheme,
  ThemeOptions,
  Components,
  Theme,
  PaletteOptions,
} from '@mui/material';
import typography from './typography';
import { dark, light } from './palettes';

const makeOverrides = (palette: PaletteOptions): Components<Theme> => ({
  MuiCssBaseline: {
    styleOverrides: {
      '@global': {
        body: {
          fontFamily: 'Rubik, sans-serif',
          color: palette?.text?.primary,
          backgroundColor: 'white',
        },
        h1: {
          fontSize: `${typography.displayXL.fontSize}px`,
          lineHeight: `${typography.displayXL.lineHeight}`,
        },
        h2: {
          fontSize: `${typography.displayLg.fontSize}px`,
          lineHeight: `${typography.displayLg.lineHeight}`,
        },
        h3: {
          fontSize: `${typography.displayMd.fontSize}px`,
          lineHeight: `${typography.displayMd.lineHeight}`,
        },
        h4: {
          fontSize: `${typography.displaySm.fontSize}px`,
          lineHeight: `${typography.displaySm.lineHeight}`,
        },
        h5: {
          fontSize: `${typography.displayXs.fontSize}px`,
          lineHeight: `${typography.displayXs.lineHeight}`,
        },
        h6: {
          fontSize: `${typography.displayXxs.fontSize}px`,
          lineHeight: `${typography.displayXxs.lineHeight}`,
        },
        p: {
          fontSize: `${typography.textMd.fontSize}px`,
          lineHeight: `${typography.textMd.lineHeight}`,
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        backgroundColor: palette?.background?.default,
        boxShadow: 'none',
        color: palette?.text?.primary,
        '&$expanded': {
          margin: 0,
        },
        '&::before': {
          height: 0,
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 0,
      },
      content: {
        margin: 0,
        '&$expanded': {
          margin: 0,
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: 0,
        paddingBottom: 16,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        display: 'none',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textAlign: 'left',
        fontSize: 18,
        padding: '0 0 7px',
        lineHeight: '28px',
        minHeight: 0,
        textTransform: 'capitalize',
        '&$selected': {
          color: palette.primary,
        },
      },
      wrapped: {
        display: 'inline-block',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      shrink: {
        display: 'none',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 'bold',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 32,
        paddingRight: 32,
        textTransform: 'none',
      },
      text: {
        fontWeight: 'bold',
      },
    },
  },
});

const BaseTheme: ThemeOptions = {
  typography,
  spacing: 8,
  shape: {
    borderRadius: 10,
  },
  cornerRadius: {
    sm: 8,
    md: 10,
    lg: 12,
  },
  customShadows: {
    xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    sm: '0px 2px 4px rgba(16, 24, 40, 0.06)',
    md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
    xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)',
    xl2: '0px 24px 48px -12px rgba(16, 24, 40, 0.25)',
    xl3: '0px 32px 64px -12px rgba(16, 24, 40, 0.2)',
  },
  focused: {
    primary_100_xs: `0px 1px 2px rgba(23, 33, 54, 0.05), 0px 0px 0px 4px ${light.primary_brandDark?.primary_brandDark_100}`,
    error_100_xs: `0px 1px 2px rgba(23, 33, 54, 0.05), 0px 0px 0px 4px ${light.functional_error?.functional_error_100}`,
    offBlack_100_xs: `0px 1px 2px rgba(23, 33, 54, 0.05), 0px 0px 0px 4px ${light.supportive_offBlack?.supportive_offBlack_100}`,
    primary_100_sm: ` 0px 1px 3px rgba(23, 33, 54, 0.1), 0px 1px 2px rgba(23, 33, 54, 0.06), 0px 0px 0px 4px ${light.primary_brandDark?.primary_brandDark_100}`,
    offBlack_100_sm: `0px 1px 2px rgba(23, 33, 54, 0.05), 0px 0px 0px 4px ${light.functional_error?.functional_error_100}`,
    focused_800_sm: `0px 1px 2px rgba(23, 33, 54, 0.05), 0px 0px 0px 4px ${light.functional_error?.functional_error_100}`,
  },
  blurs: {
    light: {
      sm: {
        background: 'rgba(255, 255, 255, 0.6);',
        backdropFilter: 'blur(8px)',
      },
      md: {
        background: 'rgba(255, 255, 255, 0.6);',
        backdropFilter: 'blur(16px)',
      },
      lg: {
        background: 'rgba(255, 255, 255, 0.6);',
        backdropFilter: 'blur(24px)',
      },
      xl: {
        background: 'rgba(255, 255, 255, 0.6);',
        backdropFilter: 'blur(40px)',
      },
    },
    dark: {
      sm: {
        background: 'rgba(52, 64, 84, 0.6);;',
        backdropFilter: 'blur(8px)',
      },
      md: {
        background: 'rgba(52, 64, 84, 0.6);;',
        backdropFilter: 'blur(16px)',
      },
      lg: {
        background: 'rgba(52, 64, 84, 0.6);;',
        backdropFilter: 'blur(24px)',
      },
      xl: {
        background: 'rgba(52, 64, 84, 0.6);;',
        backdropFilter: 'blur(40px)',
      },
    },
  },
};

const focused = () => {
  const ranges = ['100', '800'];
  const sizes = [
    {
      name: 'xs',
      template: '0px 1px 2px rgba(23, 33, 54, 0.05), 0px 0px 0px 4px #color',
    },
    {
      name: 'sm',
      template:
        '0px 1px 3px rgba(23, 33, 54, 0.1), 0px 1px 2px rgba(23, 33, 54, 0.06), 0px 0px 0px 4px #color;',
    },
  ];
  const colors = [
    { name: 'primary', color: 'primary_brandDark' },
    { name: 'offBlack', color: 'primary_brandDark' },
    { name: 'error', color: 'functional_error' },
  ];
  const results = {};
  colors.forEach((color: { name: string; color: string }) => {
    ranges.forEach((range: string) => {
      sizes.forEach((size: { name: string; template: string }) => {
        results[`${color.name}_${range}_${size.name}`] = size.template.replace(
          '#color',
          light[color.color][`${color.color}_${range}`]
        );
      });
    });
  });
  return results;
};

const DefaultTheme: ThemeOptions = {
  ...BaseTheme,
  components: makeOverrides(light),
  palette: light,
  focused: focused(),
};

const DarkTheme: ThemeOptions = {
  ...BaseTheme,
  components: makeOverrides(dark),
  palette: dark,
  focused: focused(),
};

export default {
  light: responsiveFontSizes(createTheme(DefaultTheme)),
  dark: responsiveFontSizes(createTheme(DarkTheme)),
};
