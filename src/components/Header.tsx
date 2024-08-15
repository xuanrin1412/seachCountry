import { FaRegMoon } from "react-icons/fa";
import { useAppDispatch } from "@/app/store";
import { setCallAllCountry, setSelectedRegion } from "@/features/flag/flagSlice";
import { useEffect, useState } from "react";

const Header = () => {
    const dispatch = useAppDispatch()
    const handleCallAllCountry = () => {
        dispatch(setCallAllCountry(true))
        dispatch(setSelectedRegion(""))
    }

    const [theme, setTheme] = useState<string>("light")
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html")?.classList.add("dark")
        } else {
            document.querySelector("html")?.classList.remove("dark")

        }
    }, [theme])
    return <div className="fixed top-0 left-0 w-full h-header shadow-bottom bg-white dark:bg-slate-800 z-50">
        <div className="w-[80%] lg:w-container  mx-auto flex h-full items-center justify-between">
            <span onClick={() => handleCallAllCountry()} className="cursor-pointer text-lg font-bold text-black dark:text-white">Where in the world?</span>
            <div onClick={changeTheme} className="flex items-center gap-2">
                <FaRegMoon className="text-black dark:text-yellow-300" />
                <span className="font-medium text-black dark:text-white">{theme === "dark" ? "Light mode" : "Dark Mode"}</span>
            </div>
        </div>
    </div>;
};

export default Header;
