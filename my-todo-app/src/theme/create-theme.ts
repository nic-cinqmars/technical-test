import { extendTheme, type Theme } from '@mui/material/styles';

export function createTheme(): Theme {
  const initialTheme = {};

  const theme = extendTheme(initialTheme);

  return theme;
}
