import { SignInObject } from "../types";

const API_URL: string = "https://elite-app-backend.onrender.com";

export const getCars = async () => {
  const res = await fetch(`${API_URL}/cars`);
  if (!res.ok) throw Error("Failed getting cars");

  const data = await res.json();
  return data;
};

export const getAirplanes = async () => {
  const res = await fetch(`${API_URL}/airplanes`);
  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  return data;
};

export const getCar = async (id: string) => {
  const res = await fetch(`${API_URL}/cars/${id}`);

  if (!res.ok) throw Error("Failed getting car");

  const data = await res.json();
  return data;
};

export const signin = async (user: SignInObject) => {
  try {
    const res = await fetch(`${API_URL}/users/tokens/sign_in`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    console.log(data);
    localStorage.setItem("resource_owner", JSON.stringify(data.resource_owner));
    localStorage.setItem("refresh_token", data.refresh_token);
    localStorage.setItem("access_token", data.token);
  } catch {
    throw Error("Failed siging user in");
  }
};
