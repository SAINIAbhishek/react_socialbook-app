import { UserBasicType, UserRegisterType } from '../types/UserType';
import { CONFIG } from '../config/Config';

export async function LOGGED_IN(values: UserBasicType) {
  return await fetch(`${CONFIG.BASE_API_URL}auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export async function REGISTER_USER(values: UserRegisterType) {
  const formData = new FormData();

  for (const value in values) {
    formData.append(value, values[value]);
  }
  formData.append('picturePath', values.picture.name);

  return await fetch(`${CONFIG.BASE_API_URL}auth/register`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
