import axios from "axios";
// import Cookies from "js-cookie";

// Create Axios instance
const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add a request interceptor
// AxiosInstance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("Save&Sharetoken");
    
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default AxiosInstance;