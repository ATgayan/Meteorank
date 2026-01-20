import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ,
});

export const attachToken = async (
  getToken: () => Promise<string>
): Promise<void> => {
  const token = await getToken();

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default api;
