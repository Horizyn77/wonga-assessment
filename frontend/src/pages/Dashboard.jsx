import {Card, CardContent} from "@/components/ui/card.jsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {Mail} from "lucide-react";

const Dashboard = () => {
    return (
        <div className="flex min-h-svh w-full items-start justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                            <div className="relative">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src="https://bundui-images.netlify.app/avatars/08.png" alt="Profile"/>
                                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                                    <h1 className="text-2xl font-bold">John Doe</h1>
                                </div>
                                <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Mail className="size-4"/>
                                        john.doe@example.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard;