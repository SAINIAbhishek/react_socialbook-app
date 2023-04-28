import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { AppStateType } from './types/AppStateType';
import { THEME_SETTINGS } from './Theme';
import HomePage from './pages/home/HomePage';
import { ProfilePage } from './pages/profile/ProfilePage';
import ProtectedRoutes from './routes/ProtectedRoutes';
import PublicRoutes from './routes/PublicRoutes';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  const mode = useSelector((state: AppStateType) => state.mode);
  const theme = useMemo(() => createTheme(THEME_SETTINGS(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<LoginPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
