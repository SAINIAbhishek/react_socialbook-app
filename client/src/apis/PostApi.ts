import { Cookies } from 'react-cookie';
import { CONFIG } from '../config/Config';

const cookies = new Cookies();
const token = cookies.get(CONFIG.ACCESS_TOKEN);

export async function GET_POSTS() {
  return await fetch(`${CONFIG.BASE_API_URL}posts`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
