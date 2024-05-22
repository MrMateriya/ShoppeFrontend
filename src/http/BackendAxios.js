import axios from "axios";
import {useRouter} from "next/navigation";

const BackendAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  withCredentials: true
})

BackendAxios.interceptors.response.use((config) => {
  return config
}, async (error) => {
  if (error.response?.status === 401) {
    try {
      const retryingAxios = axios
      await retryingAxios.get(`/refresh`, {
        headers: {
          'Content-Type': 'application/json',
        },
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        withCredentials: true
      })

      return await retryingAxios.request(error.config)
    } catch (e) {
      return Promise.reject(error)
    }
  }

  return error
})

export {BackendAxios}