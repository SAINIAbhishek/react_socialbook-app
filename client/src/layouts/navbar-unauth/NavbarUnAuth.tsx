import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import Heading from '../../components/heading/Heading';

const NavbarUnAuth = () => {
  const background = useTheme().palette.background['alt'];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: background,
        padding: '1rem 6%',
        textAlign: 'center',
      }}>
      <Heading title="Socialbook" />
    </Box>
  );
};

export default NavbarUnAuth;
