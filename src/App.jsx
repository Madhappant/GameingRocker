// App.jsx
import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import News from './Pages/News.jsx';
import ContactUs from './Pages/ContactUs.jsx';

import Login from './Pages/Login.jsx';
import Signup from './Pages/SignUp.jsx';
import ResetPassword from './Pages/ResetPassword.jsx';
import PasswordResetSent from './Pages/PasswordResetSent.jsx';
import ChooseInterest from './Pages/ChooseInterest.jsx';
import EditBio from './Pages/EditBio.jsx';

import Library from './Pages/Library.jsx'; 
import DemoGames from './Pages/DemoGames.jsx'; // <-- Added DemoGames page

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
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/news" element={<News />} />
        <Route path="/library" element={<Library />} /> 
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/demo-games" element={<DemoGames />} /> {/* DemoGames route */}

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-sent" element={<PasswordResetSent />} />
        <Route path="/choose-interest" element={<ChooseInterest />} />
        <Route path="/edit-bio" element={<EditBio />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
