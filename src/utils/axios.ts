import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data) toast.error(error?.response?.data);
    return Promise.reject(error);
  }
);

export default axios;
