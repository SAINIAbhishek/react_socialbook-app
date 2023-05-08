import RegisterForm from './RegisterForm';
import UnAuth from '../../layouts/unauth/UnAuth';
import { useMutation } from 'react-query';
import { SIGNED_UP } from '../../apis/auth/Auth';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const { mutate, isError } = useMutation(SIGNED_UP, {
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error) => console.error(error),
  });

  return (
    <UnAuth title="Make the most of your social life">
      {isError && (
        <p style={{ color: 'darkred', fontWeight: '600' }}>
          Server error. Please try again.
        </p>
      )}
      <RegisterForm handleFormSubmit={(values) => mutate(values)} />
    </UnAuth>
  );
};

export default RegisterPage;
