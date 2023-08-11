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

export const getAirplane = async (id: string) => {
  const res = await fetch(`${API_URL}/airplanes/${id}`);

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
    localStorage.setItem("resource_owner", JSON.stringify(data.resource_owner));
    localStorage.setItem("refresh_token", data.refresh_token);
    localStorage.setItem("access_token", data.token);

    const res2 = await fetch(`${API_URL}/users`);
    const data2 = await res2.json();
    const [userb] = data2.filter((user: SignInObject) => {
      return user.email === data.resource_owner.email;
    });
    localStorage.setItem("person", JSON.stringify(userb));
  } catch {
    throw Error("Failed siging user in");
  }
};

export const signup = async (user: SignInObject) => {
  try {
    const res = await fetch(`${API_URL}/users/tokens/sign_up`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    localStorage.setItem("resource_owner", JSON.stringify(data.resource_owner));
    localStorage.setItem("refresh_token", data.refresh_token);
    localStorage.setItem("access_token", data.token);

    const res2 = await fetch(`${API_URL}/users`);
    const data2 = await res2.json();
    const [userb] = data2.filter((user: SignInObject) => {
      return user.email === data.resource_owner.email;
    });
    localStorage.setItem("person", JSON.stringify(userb));
  } catch {
    throw Error("Failed siging user in");
  }
};

export const logout = async () => {
  await localStorage.removeItem("refresh_token");
  await localStorage.removeItem("resource_owner");
  await localStorage.removeItem("person");
  await localStorage.removeItem("access_token");
  location.reload();
};

export const reserveAirplane = async (user: SignInObject) => {
  try {
    const res = await fetch(`${API_URL}/users/tokens/airplane_reservations`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    console.log(data);
  } catch {
    throw Error("Failed siging user in");
  }
};
