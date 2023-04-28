import * as React from 'react';
import UnAuth from '../../layouts/unauth/UnAuth';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <UnAuth title="Welcome to your social community">
      <LoginForm />
    </UnAuth>
  );
};

export default LoginPage;
