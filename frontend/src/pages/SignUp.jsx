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
} from "@/components/ui/field"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import {Link} from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "@/lib/validations.js";

const SignUp  = ({...props}) => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values) => {
        const isSuccess = await register(values);

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
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="m@example.com" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="pt-2">
                                    <Button type="submit" className="w-full cursor-pointer">
                                        Create Account
                                    </Button>
                                    <p className="px-6 mt-4 text-center text-sm text-muted-foreground">
                                        Already have an account?{" "}
                                        <Link to="/" className="underline underline-offset-4 hover:text-primary transition-colors">
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default SignUp;