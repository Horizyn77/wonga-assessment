import { createContext,  useState, useEffect } from "react";
import authApi from "../api/authApi";
import userApi from "../api/userApi";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = async (data) => {
        try {
            await authApi.post("/auth/register", data);
            toast.success("Registration successful!");
            return true;
        } catch (error) {
            if (error.response?.status === 409) {
                toast.error(error.response?.data.message);
            } else {
                toast.error("Registration failed");
            }
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

    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem("token");

            if (token) {
                try {
                    await getProfile();
                } catch {
                    localStorage.removeItem("token");
                }
            }

            setLoading(false);
        };

        initializeAuth();
    }, []);

    if (loading) return null;

    return (
        <AuthContext.Provider value={{ user, login, register, getProfile, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;