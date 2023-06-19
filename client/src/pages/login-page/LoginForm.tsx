import * as yup from 'yup';
import { UserBasicType } from '../../types/UserType';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Formik } from 'formik';
import { LOGGED_IN } from '../../apis/AuthApi';
import { useAppDispatch } from '../../app/StoreHooks';
import { setLogin } from '../../slices/AuthSlice';
import { CONFIG } from '../../config/Config';
import { Cookies } from 'react-cookie';

const validationSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
});

const initialValues: UserBasicType = {
  email: '',
  password: '',
};

const cookies = new Cookies();

const LoginForm = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (values: UserBasicType) => {
    const loggedIn = await LOGGED_IN(values);

    if (!!loggedIn) {
      cookies.set(CONFIG.ACCESS_TOKEN, loggedIn.token, { path: '/' });

      dispatch(
        setLogin({
          user: loggedIn.user,
        })
      );

      navigate('/home');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}>
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

          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
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
                textDecoration: 'underline',
                color: palette.primary.main,
                '&:hover': {
                  cursor: 'pointer',
                  color: palette.primary.light,
                },
              }}>
              Don't have an account? Sign Up here.
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
