import { API_ENDPOINT } from "../config";
import { User } from "../types/User";

const SERVICE_ENDPOINT = `${API_ENDPOINT}/user`;

export async function listUsers() {
  const res = await fetch(`${SERVICE_ENDPOINT}`);
  const users = await res.json();

  return users;
}

export async function getUser(userId: number) {
  const res = await fetch(`${SERVICE_ENDPOINT}/${userId}`);
  const user = await res.json();

  return user;
}

export async function createUser(body: User) {
  const res = await fetch(`${SERVICE_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const user = await res.json();

  return user;
}

export async function updateUser(userId: number, body: User) {
  const res = await fetch(`${SERVICE_ENDPOINT}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const user = await res.json();

  return user;
}

export async function deleteUser(userId: number) {
  const res = await fetch(`${SERVICE_ENDPOINT}/${userId}`, {
    method: "DELETE",
  });

  const user = await res.json();

  return user;
}
