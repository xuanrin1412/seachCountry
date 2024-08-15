import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return <div className="relative w-full min-h-screen ">
        <Header />
        <div className="mt-header  bg-gray-100 dark:bg-slate-900">
            <div className="w-[80%]  min-h-screen lg:w-container  mx-auto ">
                <Outlet />
            </div>
        </div>
    </div>
};

export default Layout;
