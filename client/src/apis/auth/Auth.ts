import { LoginType } from '../../types/LoginType';
import { RegisterType } from '../../types/RegisterType';
import axios from '../../lib/axios/AxiosInstance';

export const SIGNED_IN = (values: LoginType) => {
  return axios.post('/auth/login', JSON.stringify(values), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const SIGNED_UP = (values: RegisterType) => {
  const formData = new FormData();
  for (const value in values) {
    formData.append(value, values[value]);
  }
  if (values.picture && values.picture.name) {
    formData.append('picturePath', values.picture.name);
  }
  return axios.post('/auth/register', formData);
};
