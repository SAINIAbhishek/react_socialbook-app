import { LoginType } from '../../types/LoginType';
import { ENV } from '../../environments/Environment';
import axios from 'axios';

export async function LOGGED_IN(values: LoginType) {
  return await fetch(`${ENV.BASE_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  }).then((response) => response.json());
}

export const signInUser = async (values: LoginType) => {
  return await axios.post(
    `${ENV.BASE_API_URL}/auth/login`,
    JSON.stringify(values),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export async function REGISTER(values) {
  // this allows us to send form info with image
  const formData = new FormData();
  for (const value in values) {
    formData.append(value, values[value]);
  }
  formData.append('picturePath', values.picture.name);
  return await fetch(`${ENV.BASE_API_URL}/auth/register`, {
    method: 'POST',
    body: formData,
  }).then((response) => response.json());
}
