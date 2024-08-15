
import { ICountryData } from "@/types/Flag";
import { useEffect, useState } from "react";
import { formatNumberWithDots } from "@/lib/FormatNumberWithDots";
import { getAllCountry, getAllCountryInRegion } from "@/service/CountryService";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setCallAllCountry } from "@/features/flag/flagSlice";
import { useNavigate } from "react-router-dom";

const Flags: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false)
    const textSearch: string = useAppSelector(state => state.flag.textSearch)
    const callAllCountry: boolean = useAppSelector(state => state.flag.callAllCountry)
    const selectedRegion: string = useAppSelector(state => state.flag.selectedRegion)

    const [countryData, setCountryData] = useState<ICountryData[] | undefined>();
    const [countryInRegion, setCountryInRegion] = useState<ICountryData[] | undefined>();

    const optionn = countryInRegion ? countryInRegion : countryData
    const filteredCountries = optionn?.filter((item) =>
        item.name.common.toLowerCase().includes(textSearch.toLowerCase())
    );

    const handleViewDetailCountry = (name: string) => {
        navigate(`/detailFlag/${name.toLocaleLowerCase()}`, { state: { nameCountry: name.toLocaleLowerCase() } });
        console.log("name country", name.toLocaleLowerCase());
    }

    useEffect(() => {
        setLoading(true)
        const getAllCountryData = async () => {
            try {
                const res = await getAllCountry();
                setCountryData(res.data);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error(error);
            }
        };
        getAllCountryData();
        if (callAllCountry) {
            setCountryInRegion(undefined)
            getAllCountryData();
            dispatch(setCallAllCountry(false))
        }
        if (selectedRegion) {
            const getAllCountryInRegionData = async () => {
                setLoading(true)
                try {
                    const res = await getAllCountryInRegion(selectedRegion);
                    setCountryInRegion(res.data);
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    console.error(error);
                }
            };
            getAllCountryInRegionData();
        }
    }, [callAllCountry, dispatch, selectedRegion]);

    return <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-10">
        {loading && <div className="">...loading</div>}
        {filteredCountries?.length === 0 && !loading && (
            <div className="col-span-4 text-center text-gray-600 text-xl">No countries found</div>
        )}
        {filteredCountries?.map((item, index) => (
            <div onClick={() => handleViewDetailCountry(item.name.common)} key={index} className="">
                <div className="h-40 w-full rounded-t-md  ">
                    <img className="rounded-t-md h-full w-full object-cover" src={item.flags.png} alt={item.name.common} />
                </div>
                <div className="p-4 bg-white dark:bg-slate-800  rounded-b-md">
                    <div className="font-bold text-lg pb-2 text-black dark:text-white">{item.name.common}</div>
                    <div className="text-black dark:text-white"><span className="font-bold">Population:</span> &nbsp;
                        {formatNumberWithDots(item.population)}</div>
                    <div className="text-black dark:text-white"><span className="font-bold">Region:</span> &nbsp;{item.region}</div>
                    <div className="text-black dark:text-white"><span className="font-bold">Capital:</span> &nbsp;{item.capital}</div>
                </div>
            </div>
        ))}
    </div>
};
export default Flags;
