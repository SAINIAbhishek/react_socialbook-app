import { CONFIG } from '../config/Config';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const token = cookies.get(CONFIG.ACCESS_TOKEN);

export async function PATCH_USER_FRIEND(userId: string, friendId: string) {
  return await fetch(`${CONFIG.BASE_API_URL}/users/${userId}/${friendId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export async function GET_USER_POSTS(userId: string) {
  return await fetch(`${CONFIG.BASE_API_URL}posts/${userId}/posts`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
