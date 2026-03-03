import { createContext,  useState } from "react";
import authApi from "../api/authApi";
import userApi from "../api/userApi";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const register = async (data) => {
        try {
            await authApi.post("/auth/register", data);
            toast.success("Registration successful!");
            return true;
        } catch (error) {
            toast.error("Registration failed");
            console.error(error)
            return false;
        }
    };

    const getToken = async (data) => {
        const response = await authApi.post("/auth/login", data);

        localStorage.setItem("token", response.data.token);

        return response.data;
    };

    const getProfile = async () => {
        const response  = await userApi.get("/users/me")
        setUser(response.data);
    }

    const login = async (data) => {
        try {
            await getToken(data);
            toast.success("Login successful");
        } catch (error) {
            console.error(error);
            const message = error.response?.data || "Login failed";
            toast.error(message);
        }

        if (localStorage.getItem("token")) {
            await getProfile();
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, getProfile, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;