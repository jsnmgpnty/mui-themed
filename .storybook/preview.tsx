import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Theme } from '../src/theme';
import { ThemeContextProvider, ThemeType } from '../src/contexts';

const Main = ({ theme, ...props }) => {
  const getTheme = () => {
    switch (theme) {
      case ThemeType.DARK:
        return Theme.dark;
      default:
        return Theme.light;
    }
  };

  const getBg = () => {
    switch (theme) {
      case ThemeType.DARK:
        return 'grey.700';
      default:
        return 'grey.100';
    }
  };

  return (
    <EmotionThemeProvider theme={getTheme()}>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Box bgcolor={getBg()} p={4} width="100vw" height="100vh">
          {props.children}
        </Box>
      </ThemeProvider>
    </EmotionThemeProvider>
  );
};

const withThemeProvider = (Story, context) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <ThemeContextProvider>
        <Main theme={context?.globals?.theme}>
          <Story {...context} />
        </Main>
      </ThemeContextProvider>
    </>
  );
};

export const decorators = [withThemeProvider];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: '700px',
  },
};
