import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: "https://31.169.69.116:5001/api",
  });
};

export default api;
