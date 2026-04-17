import axios from "axios";


const axioInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    headers: {
    "Content-Type": "application/json",
  },
})

export default axioInstance