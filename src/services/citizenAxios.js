import axios from "axios";

const citizenAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

// ✅ Add this interceptor
citizenAxios.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"]; // let axios set multipart + boundary automatically
  }
  return config;
});

export default citizenAxios;