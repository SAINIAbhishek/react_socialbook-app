import { ENV } from '../../environments/Environment';

export async function CREATE_POST(
  userId: string,
  post: string,
  image: any,
  token: string
) {
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('description', post);
  if (image) {
    formData.append('picture', image);
    formData.append('picturePath', image.name);
  }
  return await fetch(`${ENV.BASE_API_URL}/posts`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  }).then((response) => response.json());
}

export async function LIKE_POST(
  loggedInUserId: string,
  postId: string,
  token: string
) {
  return await fetch(`${ENV.BASE_API_URL}/posts/${postId}/like`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: loggedInUserId }),
  }).then((response) => response.json());
}

export async function GET_POSTS(token: string) {
  return await fetch(`${ENV.BASE_API_URL}/posts`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}
