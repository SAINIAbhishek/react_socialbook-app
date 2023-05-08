import axios from '../../lib/axios/AxiosInstance';

/*export async function GET_FRIENDS(userId: string, token: string) {
  return await fetch(`${ENV.BASE_API_URL}/users/${userId}/friends`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}*/

export const GET_FRIENDS = (userId: string) => {
  return axios.get(`/users/${userId}/friends`);
};

/*export async function GET_USER(userId: string, token: string) {
  return await fetch(`${ENV.BASE_API_URL}/users/${userId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}*/

export const GET_USER = (userId: string) => {
  return axios.get(`/users/${userId}/friends`);
};

/*export async function GET_USER_POSTS(userId: string) {
  return await fetch(`${ENV.BASE_API_URL}/posts/${userId}/posts`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${TOKEN}` },
  }).then((response) => response.json());
}*/

export const GET_USER_POSTS = ({ queryKey }) => {
  const userId = queryKey[1];
  return axios.get(`/posts/${userId}/posts`);
};
