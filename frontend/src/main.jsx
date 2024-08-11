import { createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Dark background color
      paper: '#1d1d1d', // Slightly lighter color for paper elements
    },
    text: {
      primary: '#ffffff', // Primary text color
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>

      <App />
    </ThemeProvider>

  </StrictMode>,
)
