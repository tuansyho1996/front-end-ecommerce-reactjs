import axios from "axios";
import _ from 'lodash'



const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL
})

instance.defaults.withCredentials = true


instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  error => {
    const resError = Promise.reject(error);
    return resError
  }
)

export default instance