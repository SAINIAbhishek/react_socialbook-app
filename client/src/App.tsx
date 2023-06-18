import {useMemo} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {THEME_SETTINGS} from './Theme';
import ProtectedRoutes from './routes/ProtectedRoutes';
import HomePage from './pages/home-page';
import ProfilePage from './pages/profile-page';
import PublicRoutes from './routes/PublicRoutes';
import LoginPage from './pages/login-page';
import {useAppSelector} from './app/StoreHooks';

function App() {
  const mode = useAppSelector((state) => state.mode);
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
              <Route path="/" element={<LoginPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
