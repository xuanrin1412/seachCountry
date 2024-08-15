import Flags from "@/components/Flags";
import SearchBarAndFilter from "@/components/SearchBarAndFilter";

const MainComponent = () => {

    return (
        <div className="py-8">
            <SearchBarAndFilter />
            <Flags />
        </div>
    );
};

export default MainComponent;
