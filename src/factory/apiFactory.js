import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://5db305d7a394f5001443a97d.mockapi.io',
    timeout: 2000,
    headers: {'X-Referer': 'Falcon-website'}
  });

  
export default axiosInstance;