import axios from "axios";

const apiClient = (baseURL: string) => {
  return axios.create({
    baseURL: baseURL,
  });
};

export default apiClient;
