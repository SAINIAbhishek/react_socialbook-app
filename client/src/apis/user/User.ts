import { ENV } from '../../environments/Environment';

export async function GET_FRIENDS(userId: string, token: string) {
  return await fetch(`${ENV.BASE_API_URL}/users/${userId}/friends`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}

export async function GET_USER(userId: string, token: string) {
  return await fetch(`${ENV.BASE_API_URL}/users/${userId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}

export async function GET_USER_POSTS(userId: string, token: string) {
  return await fetch(`${ENV.BASE_API_URL}/posts/${userId}/posts`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}
