import axios from '../../lib/axios/AxiosInstance';
import { CONFIG } from '../../config/Config';

/*export async function CREATE_POST(userId: string, post: string, image: any) {
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('description', post);
  if (image) {
    formData.append('picture', image);
    formData.append('picturePath', image.name);
  }
  return await fetch(`${ENV.BASE_API_URL}/posts`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: formData,
  }).then((response) => response.json());
}*/

export const CREATE_POST = (userId: string, post: string, image: any) => {
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('description', post);
  if (image) {
    formData.append('picture', image);
    formData.append('picturePath', image.name);
  }
  return axios.post('/posts', formData);
};

/*export async function LIKE_POST(loggedInUserId: string, postId: string) {
  return await fetch(`${ENV.BASE_API_URL}/posts/${postId}/like`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: loggedInUserId }),
  }).then((response) => response.json());
}*/

export const LIKE_POST = (loggedInUserId: string, postId: string) => {
  return axios.patch(
    `/posts/${postId}/like`,
    JSON.stringify({ userId: loggedInUserId })
  );
};

/*export async function GET_POSTS() {
  return await fetch(`${ENV.BASE_API_URL}/posts`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${TOKEN}` },
  }).then((response) => response.json());
}*/

export const GET_POSTS = () => {
  return axios.get('/posts', {
    headers: {
      Authorization: sessionStorage.getItem(CONFIG.ACCESS_TOKEN),
    },
  });
};
