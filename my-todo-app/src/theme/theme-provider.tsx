import type {} from '@mui/material/themeCssVarsAugmentation';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { PropsWithChildren } from 'react';

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
