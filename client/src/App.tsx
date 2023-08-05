import { lazy, Suspense, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { THEME_SETTINGS } from './Theme';
import ProtectedRoutes from './routes/ProtectedRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { useAppSelector } from './app/StoreHooks';
import LoginPage from './pages/login-page/LoginPage';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const ProfilePage = lazy(() => import('./pages/profile-page/ProfilePage'));
const RegisterPage = lazy(() => import('./pages/register-page/RegisterPage'));

function App() {
  const mode = useAppSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(THEME_SETTINGS(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
