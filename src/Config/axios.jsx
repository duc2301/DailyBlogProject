import axios from 'axios'
const baseURL = "https://localhost:7151/api/";

const config = {
  baseURL: baseURL,
};

const api = axios.create(config);

api.defaults.baseURL = baseURL;

// handle before call API
const handleBefore = (config) => {
  //handle hanh dong truoc khi call api

  //lấy ra token và đính kèm request
  const token = localStorage.getItem("token")?.replaceAll('"', "");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};

api.interceptors.request.use(handleBefore, null);

export default api;
