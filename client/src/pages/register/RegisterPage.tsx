import * as React from 'react';
import RegisterForm from './RegisterForm';
import UnAuth from '../../layouts/unauth/UnAuth';

const RegisterPage = () => {
  return (
    <UnAuth title="Make the most of your social life">
      <RegisterForm />
    </UnAuth>
  );
};

export default RegisterPage;
