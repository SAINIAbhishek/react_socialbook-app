import { CONFIG } from '../config/Config';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const token = cookies.get(CONFIG.ACCESS_TOKEN);

export async function GET_USER_POSTS(userId: string) {
  return await fetch(`${CONFIG.BASE_API_URL}posts/${userId}/posts`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
