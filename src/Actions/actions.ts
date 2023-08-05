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
