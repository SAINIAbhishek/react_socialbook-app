import { BASE_API_URL } from "./base";

export async function CREATE_POST(userId, post, image, token) {
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("description", post);
  if (image) {
    formData.append("picture", image);
    formData.append("picturePath", image.name);
  }
  return await fetch(`${BASE_API_URL}posts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  }).then((response) => response.json());
}

export async function LIKE_POST(loggedInUserId, postId, token) {
  return await fetch(`${BASE_API_URL}posts/${postId}/like`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: loggedInUserId }),
  }).then((response) => response.json());
}

export async function GET_POSTS(token) {
  return await fetch(`${BASE_API_URL}posts`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}
