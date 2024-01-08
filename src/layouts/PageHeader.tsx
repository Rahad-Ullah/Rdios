import { ArrowLeft, Bell, Menu, MicIcon, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png"
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
    
    return (
        <div className="flex justify-between items-center gap-10 lg:gap-20 py-2 px-3">
            {/* Left section */}
            <div className={`items-center gap-4 ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
                <Button variant={"ghost"} size={"icon"}>
                    <Menu/>
                </Button>
                <a href="/" className="">
                    <img src={logo} alt="logo" className="h-6"/>
                </a>
            </div>
            
            {/* Middle section */}
            <form className={` justify-center items-center gap-4 flex-grow ${showFullWidthSearch ? 'flex' : 'hidden md:flex'}`}>
                <Button onClick={() => setShowFullWidthSearch(false)} type="button" variant={"ghost"} size={"icon"} className={showFullWidthSearch ? 'block' : 'hidden'}>
                    <ArrowLeft/>
                </Button>
                <div className="flex flex-grow max-w-screen-sm">
                    <input type="search" placeholder="Search" className="border rounded-l-full border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"/>
                    <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0">
                        <Search/>
                    </Button>
                </div>
                <Button type="button" size={"icon"}>
                    <MicIcon/>
                </Button>
            </form>

            {/* Right section */}
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
                <Button variant={"ghost"} size={"icon"} className="md:hidden" onClick={() => setShowFullWidthSearch(true)}>
                    <Search/>
                </Button>
                <Button variant={"ghost"} size={"icon"} className="md:hidden">
                    <MicIcon/>
                </Button>
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