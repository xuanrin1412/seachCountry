import { useAppDispatch, useAppSelector } from "@/app/store";
import { setTextSearch } from "@/features/flag/flagSlice";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const textSearch = useAppSelector(state => state.flag.textSearch)
    return <div className="flex items-center w-full sm:w-1/3 bg-white dark:bg-slate-700 h-10 shadow-allSide rounded-md border border-white focus-within:border-gray-400 dark:border-gray-800 dark:focus-within:border-white">
        <div className="px-4">
            <IoIosSearch className="text-black dark:text-white" />
        </div>
        <input
            value={textSearch}
            onChange={(e) => dispatch(setTextSearch(e.target.value))}
            type="text"
            className="w-full outline-none pr-4 text-sm bg-white dark:bg-slate-700 text-black dark:text-white"
            placeholder="Search for a country ..."
        />
    </div>
};

export default SearchBar;
