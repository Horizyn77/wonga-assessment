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
import {Link} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp  = ({...props}) => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isSuccess = await register(form);

        if (isSuccess) {
            navigate("/");
        }
    };

    return (
        <div className="flex min-h-svh w-full items-start justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Field className="font-bold text-lg mb-5">WONGA AUTH SYSTEM</Field>
                <Card {...props}>
                    <CardHeader>
                        <CardTitle>Create an account</CardTitle>
                        <CardDescription>
                            Enter your information below to create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="firstname">First Name</FieldLabel>
                                    <Input id="firstName" type="text" placeholder="John" required onChange={(e) =>
                                        setForm({ ...form, firstName: e.target.value })
                                    }/>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                                    <Input id="lastName" type="text" placeholder="Doe" required onChange={(e) =>
                                        setForm({ ...form, lastName: e.target.value })
                                    }/>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }/>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <Input id="password" type="password" required onChange={(e) =>
                                        setForm({ ...form, password: e.target.value })
                                    }/>
                                    <FieldDescription>
                                        Must be at least 8 characters long.
                                    </FieldDescription>
                                </Field>
                                <FieldGroup>
                                    <Field>
                                        <Button type="submit" className="cursor-pointer">Create Account</Button>
                                        <FieldDescription className="px-6 text-center">
                                            Already have an account? <Link to="/" className="underline underline-offset-4 hover:text-primary transition-colors">Sign in</Link>
                                        </FieldDescription>
                                    </Field>
                                </FieldGroup>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default SignUp;