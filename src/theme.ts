'use client';
import { createTheme } from '@mui/material/styles';
import { purple, teal } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
          primary: {
              main: teal[500],
              dark: teal[700],
              light: teal[100],
              contrastText: 'white'
          },
          secondary: {
              main: purple[400],
              dark: purple[600],
              light: '#FFBEEF',
              contrastText: '#1d2b29c9'
          },
          error: {
              main: '#fc0000',
              light: '#fa9d9d',
              dark: '#c90000',
          },
          warning: { 
              main: '#e5df26',
              dark: '#d7d11a',
              light: '#f7f5be',
          },
          info: {
              main: '#4fc3f7'
          },
          success: {
              main: '#46b34b',
              dark: '#388e3c',
              light: '#acdeae',
          }
      },
});

export default theme;
