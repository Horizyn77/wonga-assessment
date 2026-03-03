import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Login = ({className, ...props}) => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(form);
        navigate("/dashboard");
    };

    return (
        <div className="flex min-h-svh w-full items-start justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className={cn("flex flex-col gap-6", className)} {...props}>
                 <Field className="font-bold text-lg">WONGA AUTH SYSTEM</Field>
                    <Card>
                        <CardHeader>
                            <CardTitle>Login to your account</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }/>
                                    </Field>
                                    <Field>
                                        <div className="flex items-center">
                                            <FieldLabel htmlFor="password">Password</FieldLabel>
                                        </div>
                                        <Input id="password" type="password" required onChange={(e) =>
                                            setForm({ ...form, password: e.target.value })
                                        }/>
                                    </Field>
                                    <Field>
                                        <Button type="submit" className="cursor-pointer">Login</Button>
                                        <FieldDescription className="text-center">
                                            Don&apos;t have an account? <Link to="/register" className="underline underline-offset-4 hover:text-primary transition-colors">Sign up</Link>
                                        </FieldDescription>

                                    </Field>
                                </FieldGroup>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;