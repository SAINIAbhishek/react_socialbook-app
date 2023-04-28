// color design tokens export
export const COLOR_TOKENS = {
  grey: {
    0: '#FFFFFF',
    10: '#F6F6F6',
    50: '#F0F0F0',
    100: '#E0E0E0',
    200: '#C2C2C2',
    300: '#A3A3A3',
    400: '#858585',
    500: '#666666',
    600: '#4D4D4D',
    700: '#333333',
    800: '#1A1A1A',
    900: '#0A0A0A',
    1000: '#000000',
  },
  primary: {
    50: '#E6FBFF',
    100: '#CCF7FE',
    200: '#99EEFD',
    300: '#66E6FC',
    400: '#33DDFB',
    500: '#00D5FA',
    600: '#00A0BC',
    700: '#006B7D',
    800: '#00353F',
    900: '#001519',
  },
};

// mui theme settings
export const THEME_SETTINGS = (mode: string): any => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              dark: COLOR_TOKENS.primary[200],
              main: COLOR_TOKENS.primary[500],
              light: COLOR_TOKENS.primary[800],
            },
            neutral: {
              dark: COLOR_TOKENS.grey[100],
              main: COLOR_TOKENS.grey[200],
              mediumMain: COLOR_TOKENS.grey[300],
              medium: COLOR_TOKENS.grey[400],
              light: COLOR_TOKENS.grey[700],
            },
            background: {
              default: COLOR_TOKENS.grey[900],
              alt: COLOR_TOKENS.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: COLOR_TOKENS.primary[700],
              main: COLOR_TOKENS.primary[500],
              light: COLOR_TOKENS.primary[50],
            },
            neutral: {
              dark: COLOR_TOKENS.grey[700],
              main: COLOR_TOKENS.grey[500],
              mediumMain: COLOR_TOKENS.grey[400],
              medium: COLOR_TOKENS.grey[300],
              light: COLOR_TOKENS.grey[50],
            },
            background: {
              default: COLOR_TOKENS.grey[10],
              alt: COLOR_TOKENS.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
