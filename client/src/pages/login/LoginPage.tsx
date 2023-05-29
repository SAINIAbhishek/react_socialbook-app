import UnAuth from '../../layouts/unauth/UnAuth';
import LoginForm from './LoginForm';
import { SIGNED_IN } from '../../apis/auth/Auth';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../states/AppState';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isError } = useMutation(SIGNED_IN, {
    onSuccess: (data) => {
      dispatch(
        setLogin({
          user: data.data.user,
          accessToken: data.data.token,
        })
      );
      navigate('/home');
    },
  });

  return (
    <UnAuth title="Welcome to your social community">
      {isError && (
        <p style={{ color: 'darkred', fontWeight: '600' }}>
          Credentials are incorrect.
        </p>
      )}
      <LoginForm handleFormSubmit={(values) => mutate(values)} />
    </UnAuth>
  );
};

export default LoginPage;
