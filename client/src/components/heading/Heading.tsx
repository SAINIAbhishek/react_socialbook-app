import * as React from 'react';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type Props = {
  title: string;
  variant?: Variant;
};

const Heading = ({ title, variant = 'h1', ...rest }: Props) => {
  return (
    <Typography fontWeight="bold" variant={variant} color="primary" {...rest}>
      {title}
    </Typography>
  );
};

export default Heading;
