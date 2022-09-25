import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#ECF2EA',
    },
    primary: {
      main: '#A1C298',
    },
    secondary: {
      main: '#FFF',
    },
    yellow: {
      main: '#FBF2CF',
    },
    pink: {
      main: '#FA7070',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
