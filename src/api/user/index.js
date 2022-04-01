import { AxiosInstance } from "../../util/AxiosInstance";

export const createUser = async (user, token) => {
  const { email, sub } = user;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const _id = sub.split("|")[1];

  const payload = { _id, email };
  try {
    const result = await AxiosInstance.post("/api/users", payload, { headers });
    return result;
  } catch (error) {
    throw error;
  }
};
