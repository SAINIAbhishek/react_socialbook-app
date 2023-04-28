import * as React from 'react';
import RegisterForm from './RegisterForm';
import AuthWrapper from '../../layouts/auth-wrapper/AuthWrapper';

const RegisterPage = () => {
  return (
    <AuthWrapper title="Make the most of your social life">
      <RegisterForm />
    </AuthWrapper>
  );
};

export default RegisterPage;
