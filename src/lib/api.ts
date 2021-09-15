import axios from "axios";
import Cookies from "js-cookie";

const api = () => {
  return axios.create({
    baseURL: "https://31.169.69.116:5001/api",
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
};

export default api;
