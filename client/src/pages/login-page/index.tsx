import * as React from 'react';
import Form from './form';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const LoginPage = () => {
  const background = useTheme().palette.background['alt'];
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          backgroundColor: background,
          padding: '1rem 6%',
          textAlign: 'center',
        }}>
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Socialbook
        </Typography>
      </Box>

      <Box
        sx={{
          width: isNonMobileScreens ? '50%' : '93%',
          backgroundColor: background,
          padding: '2rem',
          margin: '2rem auto',
          borderRadius: '1.5rem',
        }}>
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Welcome to Socialbook!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
