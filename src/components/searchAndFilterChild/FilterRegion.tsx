import { useAppDispatch, useAppSelector } from "@/app/store";
import { setSelectedRegion } from "@/features/flag/flagSlice";
import { getAllCountryInRegion } from "@/service/CountryService";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const dataRegion = ["Africa", "America", "Asia", "Europe", "Oceania"];
const FilterRegion = () => {
    const dispatch = useAppDispatch()
    const [showFilter, setShowFilter] = useState<boolean>(false);
    // const [loading, setLoading] = useState<boolean>(false);
    const FilterRegion = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowFilter(!showFilter);
    };
    const selectedRegion = useAppSelector(state => state.flag.selectedRegion)
    const handleChooseRegion = async (region: string) => {
        dispatch(setSelectedRegion(region))
        console.log("region", region);
        // setLoading(true)
        try {
            const res = await getAllCountryInRegion(region)
            // setLoading(false)
            console.log("getAllCountryInRegion", res.data);
        } catch (error) {
            // setLoading(false)
            console.log(error);
        }
    };
    useEffect(() => {
        const handleCloseFilter = () => {
            setShowFilter(false);
        };
        window.addEventListener("click", handleCloseFilter);
        return () => {
            window.removeEventListener("click", handleCloseFilter);
        };
    }, []);
    return <div className="relative">
        <div
            onClick={FilterRegion}
            className="cursor-pointer h-10 w-full sm:w-44 rounded-md shadow-allSide bg-white dark:bg-slate-700 text-black dark:text-white flex items-center justify-between px-4"
        >
            <span className="text-sm"> {selectedRegion ? selectedRegion : "Filter by Region"}</span>
            <FaChevronDown className={`${showFilter ? "duration-200 delay-75 rotate-180" : "duration-200 delay-75"} text-[12px]`} />
        </div>
        {showFilter && (
            <ul className="absolute top-10 z-50 mt-2 w-full bg-white dark:text-slate-700 shadow-allSide rounded-md">
                {dataRegion.map((item, index) => (
                    <li
                        onClick={() => handleChooseRegion(item)}
                        key={index}
                        className="px-4 py-1 hover:bg-gray-100 cursor-pointer first:hover:rounded-t-md last:hover:rounded-b-md bg-white dark:bg-slate-700 text-black dark:text-white first:rounded-t-md last:rounded-b-md dark:hover:bg-slate-800"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        )}
    </div>
};

export default FilterRegion;
