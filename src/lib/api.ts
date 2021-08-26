import axios from "axios";

const api = () => {

  return axios.create({
    baseURL: "http://31.169.69.116:5001/api",
  });
};

export default api;
