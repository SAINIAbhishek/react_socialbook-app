import * as React from 'react';
import * as yup from 'yup';
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { LOGGED_IN } from '../../apis/auth/Auth';
import { setLogin } from '../../states/AppState';
import { LoginType } from '../../types/LoginType';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('invalid email')
    .required('Email address is required.'),
  password: yup.string().required('Password is required.'),
});

const initialValuesLogin: LoginType = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit = async (values: LoginType) => {
    const loggedIn = await LOGGED_IN(values);
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate('/home');
    }
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}>
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
            }}>
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: 'span 4' }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: 'span 4' }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                fontSize: '1rem',
                m: '2rem 0',
                p: '1rem',
                backgroundColor: palette.primary.main,
                color: palette?.background['alt'],
                '&:hover': { color: palette.primary.main },
              }}>
              LOGIN
            </Button>
            <Typography
              onClick={() => navigate('/register')}
              sx={{
                textAlign: 'center',
                color: palette.primary.main,
                '&:hover': {
                  cursor: 'pointer',
                  textDecoration: 'underline',
                },
              }}>
              {"Don't have an account? Sign Up here."}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
