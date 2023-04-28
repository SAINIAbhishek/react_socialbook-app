import * as React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CONFIG } from '../../config/Config';
import Heading from '../../components/heading/Heading';

type Props = {
  title: string;
  children: React.ReactNode;
};

const UnAuth = ({ title, children }: Props) => {
  const background = useTheme().palette.background['alt'];
  const isNonMobileScreens = useMediaQuery(CONFIG.DESKTOP_MIN_WIDTH);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: background,
          padding: '1rem 6%',
          textAlign: 'center',
        }}>
        <Heading title="Socialbook" />
      </Box>
      <Box
        sx={{
          width: isNonMobileScreens ? '50%' : '93%',
          backgroundColor: background,
          padding: '2rem',
          margin: '2rem auto',
          borderRadius: '1.5rem',
        }}>
        <Typography fontWeight="500" variant="h2" sx={{ mb: '1.5rem' }}>
          {title}
        </Typography>
        {children}
      </Box>
    </>
  );
};

export default UnAuth;
