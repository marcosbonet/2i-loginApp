import axios, { AxiosRequestHeaders } from "axios";
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    ...config.headers,
    Authorization: `${token}`,
  } as AxiosRequestHeaders;
  return config;
});
export default authApi;
