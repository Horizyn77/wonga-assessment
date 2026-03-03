import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard";
import {AuthProvider} from "@/context/AuthContext.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <ToastContainer position="top-right" />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App
