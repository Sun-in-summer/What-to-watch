import axios, {  AxiosInstance } from 'axios';


const BACKEND_URL = 'https://10.react.htmlacademy.pro/wtw';
const REQUEST_TIMEOUT = 5000;

export const  createAxiosInstance = (baseURL:string, timeout: number): AxiosInstance => {

  const instance = axios.create({
    baseURL, 
    timeout,   
  });
   return instance;
}


// export const createAPI = (baseURL:string, timeout: number): AxiosInstance => {
//     const api = axios.create({
//     baseURL, 
//     timeout,   
//   });
//     api.interceptors.request.use(
//        (config: AxiosRequestConfig) => {
//         // const token = getToken();
//     // if (token) {
//     //     config.headers['x-token'] = token;
//     // }

//     return config;
//        }
//     )
//     api.interceptors.response.use((response) => response, (error: AxiosError)=> {
//         if (error.response ) {
//             toast.warn (error.response.data.error )
//         }
//         throw error;
//     }
//     )
//     return api;
// }

export const createAPI = ():AxiosInstance =>{
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

 

  return api;
};