import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import NavbarUnAuth from '../../layouts/navbar-unauth/NavbarUnAuth';
import { CONFIG } from '../../config/Config';
import Heading from '../../components/heading/Heading';

type Props = {
  title: string;
  children: React.ReactNode;
};

const AuthWrapper = ({ title, children }: Props) => {
  const background = useTheme().palette.background['alt'];
  const isNonMobileScreens = useMediaQuery(CONFIG.DESKTOP_MIN_WIDTH);

  return (
    <>
      <NavbarUnAuth />
      <Box
        sx={{
          width: isNonMobileScreens ? '50%' : '93%',
          backgroundColor: background,
          padding: '2rem',
          margin: '2rem auto',
          borderRadius: '1.5rem',
        }}>
        <Box sx={{ mb: '1.5rem' }}>
          <Heading title={title} variant="h2" />
        </Box>
        {children}
      </Box>
    </>
  );
};

export default AuthWrapper;
