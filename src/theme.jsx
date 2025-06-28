// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#07031f',
      paper: '#1a1a3d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0cc',
    },
    primary: {
      main: '#ffffff1c', // For transparent buttons
    },
  },
  typography: {
    fontFamily: '"Rubik", "Poppins", Helvetica, sans-serif',
    h2: { fontFamily: 'Rubik', fontWeight: 700 },
    h3: { fontFamily: 'Poppins', fontWeight: 600 },
  },
});

export default theme;