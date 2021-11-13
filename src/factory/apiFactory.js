import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://falcon-2021-api.herokuapp.com',
    timeout: 2000,
    headers: {'X-Referer': 'Falcon-website'}
  });

  
export default axiosInstance;