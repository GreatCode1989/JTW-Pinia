import axios from "axios";
import { useAuthStore } from "./stores/auth";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use((config) => {
  const url = config.url;
  if (!url.includes("signInWithPassword") && !url.includes("signUp")) {
    const authStore = useAuthStore();
    let params = new URLSearchParams();
    params.append("auth", authStore.userInfo.token);
    config.params = params;
  }
  return config;
});

// axiosApiInstance.interceptors.request.use(
//   (config) => {
//     const token = useAuthStore().userInfo.token;
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (err) => {
//     console.log(err);
//     return Promise.reject(err);
//   }
// );

export default axiosApiInstance;
