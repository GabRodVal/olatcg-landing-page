'use client';
import { createTheme } from '@mui/material/styles';
import { purple, teal, lightBlue, cyan, green, lightGreen, grey } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
          primary: {
              main: teal[500],
              dark: teal[800],
              light: teal['A100'],
              contrastText: grey[50]
          },
          secondary: {
              main: green['A700'],
              dark: teal[700],
              light: cyan[100],
              contrastText: grey[900]
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
              contrastText: grey[800]
          },
          info: {
              main: '#4fc3f7'
          },
          success: {
              main: green['A400'],
              dark: '#388e3c',
              light: '#acdeae',
          }
      },
});

export default theme;
