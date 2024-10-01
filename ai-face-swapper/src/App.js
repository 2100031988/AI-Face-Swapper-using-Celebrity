import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';
import GeneratePage from './pages/GeneratePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
const theme = createTheme({
  palette: {
    mode: 'light', // You can also use 'dark' for a dark mode UI.
    primary: {
      main: '#1976d2', // Customizable primary color
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
