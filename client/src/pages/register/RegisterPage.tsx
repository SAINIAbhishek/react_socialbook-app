import * as React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { NonAuthNavbar } from '../../layouts/navbar/NonAuthNavbar';
import { RegisterForm } from './RegisterForm';
import { CONFIG } from '../../config/Config';

export const RegisterPage = () => {
  const background = useTheme().palette.background['alt'];
  const isNonMobileScreens = useMediaQuery(CONFIG.DESKTOP_MIN_WIDTH);

  return (
    <>
      <NonAuthNavbar />
      <Box
        sx={{
          width: isNonMobileScreens ? '50%' : '93%',
          backgroundColor: background,
          padding: '2rem',
          margin: '2rem auto',
          borderRadius: '1.5rem',
        }}>
        <Typography fontWeight="500" variant="h2" sx={{ mb: '1.5rem' }}>
          Make the most of your social life
        </Typography>
        <RegisterForm />
      </Box>
    </>
  );
};
