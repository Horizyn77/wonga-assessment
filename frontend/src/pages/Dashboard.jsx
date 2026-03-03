import {Card, CardContent} from "@/components/ui/card.jsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {Mail} from "lucide-react";
import {useAuth} from "@/context/useAuth.js";
import {useNavigate} from "react-router-dom";
import {Field} from "@/components/ui/field.jsx";

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div className="flex min-h-svh w-full items-start justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Field className="font-bold text-lg mb-5">WONGA AUTH SYSTEM</Field>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                            <div className="relative">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src="https://bundui-images.netlify.app/avatars/08.png" alt="Profile"/>
                                    <AvatarFallback
                                        className="text-2xl">{user.firstName[0].toUpperCase()}{user.lastName[0].toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                                    <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
                                </div>
                                <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Mail className="size-4"/>
                                        {user.email}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </CardContent>
                    <button
                        onClick={handleLogout}
                        className="hover:underline hover:text-primary transition-colors cursor-pointer"
                    >
                        Logout
                    </button>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard;