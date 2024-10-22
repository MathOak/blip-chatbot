import { cookieUtils } from "@/src/utils/cookies";
import axios from "axios";

const contractId: string = process.env.contractId!;//Busca das Envs do projeto

export const blipConnection = axios.create({ baseURL: `https://${contractId}.http.msging.net` });

blipConnection.interceptors.request.use(
  (config) => {
    // Aqui você pode adicionar headers, autenticação, entre outros
    const key = typeof window !== 'undefined' ? cookieUtils.getCookie(process.env.cookieKey!) : undefined
    if (key) {
      config.headers.Authorization = `Key ${key}`
    }
    return config
  },
  (error) => {
    console.error('Request interceptor error:', error)
    return Promise.reject(error)
  }
)