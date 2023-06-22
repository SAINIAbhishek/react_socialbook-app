import { Cookies } from 'react-cookie';
import { CONFIG } from '../config/Config';

const cookies = new Cookies();
const token = cookies.get(CONFIG.ACCESS_TOKEN);

export async function CREATE_POST(userId: string, post: string, image: any) {
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('description', post);

  if (image) {
    formData.append('picture', image);
    formData.append('picturePath', image.name);
  }

  return await fetch(`${CONFIG.BASE_API_URL}posts`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export async function PATCH_LIKE_POST(loggedInUserId: string, postId: string) {
  return await fetch(`${CONFIG.BASE_API_URL}posts/${postId}/like`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: loggedInUserId }),
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export async function GET_POSTS() {
  return await fetch(`${CONFIG.BASE_API_URL}posts`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
