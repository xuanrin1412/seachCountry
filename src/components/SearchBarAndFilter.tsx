import SearchBar from "./searchAndFilterChild/SearchBar";
import FilterRegion from "./searchAndFilterChild/FilterRegion";

const SearchBarAndFilter = () => {
    return (
        <div className=" searchbar w-full flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 sticky">
            <SearchBar />
            <FilterRegion />
        </div>
    );
};

export default SearchBarAndFilter;
