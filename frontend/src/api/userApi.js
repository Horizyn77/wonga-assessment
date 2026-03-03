import createApi from "./axiosBase";

const userApi = createApi(import.meta.env.VITE_USER_API_URL || "http://localhost:5001/api");

export default userApi;