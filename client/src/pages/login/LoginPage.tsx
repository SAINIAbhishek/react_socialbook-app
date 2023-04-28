import * as React from 'react';
import AuthWrapper from '../../layouts/auth-wrapper/AuthWrapper';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <AuthWrapper title="Welcome to your social community">
      <LoginForm />
    </AuthWrapper>
  );
};

export default LoginPage;
