import * as React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export const NonAuthNavbar = () => {
  const background = useTheme().palette.background['alt'];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: background,
        padding: '1rem 6%',
        textAlign: 'center',
      }}>
      <Typography fontWeight="bold" variant="h1" color="primary">
        Socialbook
      </Typography>
    </Box>
  );
};
