// App.jsx
import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import News from './Pages/News.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#0b0a1f',
    },
    text: {
      primary: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/News" element={<News />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
