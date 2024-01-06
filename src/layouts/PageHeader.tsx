import { Bell, Menu, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png"
import Button from "../components/Button";

const PageHeader = () => {
    return (
        <div className="flex justify-between items-center gap-10 lg:gap-20 py-2 px-3">
            <div className="flex items-center gap-4">
                <Button variant={"ghost"} size={"icon"}>
                    <Menu/>
                </Button>
                <a href="/">
                    <img src={logo} alt="logo" className="h-6"/>
                </a>
            </div>
            <div></div>
            <div className="flex flex-shrink-0 md:gap-2">
                <Button variant={"ghost"} size={"icon"}>
                    <Upload/>
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                    <Bell/>
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                    <User/>
                </Button>
            </div>
        </div>
    );
};

export default PageHeader;