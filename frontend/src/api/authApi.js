import createApi from "./axiosBase";

const authApi = createApi(import.meta.env.VITE_AUTH_API_URL || "http://localhost:5000/api");

export default authApi;