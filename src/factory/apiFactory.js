import axios from "axios";
import { JWT_KEY } from "config";

const jwt = localStorage.getItem(JWT_KEY);


// baseURL: "https://falcon-2021-api.herokuapp.com"

const axiosInstance = axios.create({
  baseURL: "https://falcon-2021-api.herokuapp.com",
  timeout: 10000,
  headers: { "X-Referer": "Falcon-website" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (jwt) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${jwt}`,
        },
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);




export default axiosInstance;
