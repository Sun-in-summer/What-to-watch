import axios, {  AxiosError, AxiosInstance,  AxiosResponse,  InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import {StatusCodes} from 'http-status-codes';
import {toast} from 'react-toastify';

const BACKEND_URL = 'https://10.react.htmlacademy.pro/wtw';
const REQUEST_TIMEOUT = 5000;



type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};
const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = ():AxiosInstance =>{
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response, 
    (error: AxiosError<DetailMessageType>)=> {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        // Проверяет, произошла ли ошибка не из-за ответа сервера, например, отсутствие интернета
        toast.error("No internet connection. Please check your network.");
      } else if (error.code === 'ECONNABORTED' || error.message.includes('Network Error')) {
        toast.error("Connection error. Please try again.");
      } else if (shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;
        toast.warn(detailMessage.message || "An error occurred.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } else {
      toast.error("An unknown error occurred.");
    }

    throw error;
  }
);

  return api;
};