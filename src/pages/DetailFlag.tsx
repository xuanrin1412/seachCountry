import { getDetailCountry } from "@/service/CountryService";
import { IdetailCountryData } from "@/types/Flag";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const DetailFlag = () => {
    const location = useLocation();
    const nameCountry = location.state.nameCountry
    const [dataDetailCountry, setDataDetailCountry] = useState<IdetailCountryData>()
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleBackHome = () => {
        navigate(`/`)
    }

    useEffect(() => {
        const getDetailCountryData = async () => {
            setLoading(true)
            try {
                const res = await getDetailCountry(nameCountry)
                setLoading(false)
                setDataDetailCountry(res.data[0])
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }
        getDetailCountryData()
    }, [nameCountry])

    return (
        <div className=" pt-10 pb-32">
            <button className="flex items-center gap-2 py-2 px-4 rounded-xl bg-white dark:bg-slate-800 text-black dark:text-white shadow-allSide hover:bg-gray-50" onClick={handleBackHome}>
                <IoArrowBack />Back
            </button>
            <div className="pt-10 flex gap-16 flex-col lg:flex-row">
                <div className="w-full lg:w-[40%] lg:h-[335px]">
                    {loading ? <div className="card">
                        <div className="card__skeleton card__title"></div>
                        <div className="card__skeleton card__description">         </div>
                    </div> : <img className="h-full w-full object-cover" src={dataDetailCountry?.flags.png} alt="" />}
                </div>
                <div className="flex-1">
                    <div className="text-3xl font-bold pb-10 text-black dark:text-white">{dataDetailCountry?.name.common}</div>
                    <div className="grid gap-10 sm:gap-0 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <div className="text-black dark:text-white">
                                <span className="font-bold">Native Name:</span>
                                &nbsp; {dataDetailCountry?.name &&
                                    Object.keys(dataDetailCountry.name.nativeName).map(currencyCode => (
                                        <span key={currencyCode}>
                                            {dataDetailCountry.name.nativeName[currencyCode].common}
                                        </span>
                                    ))
                                }
                            </div>
                            <div className="text-black dark:text-white"><span className="font-bold">Population:</span> &nbsp; {dataDetailCountry?.population}</div>
                            <div className="text-black dark:text-white"><span className="font-bold">Region:</span>&nbsp; {dataDetailCountry?.region}</div>
                            <div className="text-black dark:text-white"><span className="font-bold">Sub Region:</span>&nbsp; {dataDetailCountry?.subregion}</div>
                            <div className="text-black dark:text-white"><span className="font-bold">Capital:</span>&nbsp; {dataDetailCountry?.capital.join(', ')}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-black dark:text-white"><span className="font-bold">Top Level Domain:</span>&nbsp; {dataDetailCountry?.tld.join(', ')}</div>
                            <div className="text-black dark:text-white">
                                <span className="font-bold">Currencies:</span>&nbsp;
                                {dataDetailCountry?.currencies &&
                                    Object.keys(dataDetailCountry.currencies).map(currencyCode => (
                                        <span key={currencyCode}>
                                            {dataDetailCountry.currencies[currencyCode].name}
                                        </span>
                                    ))
                                }
                            </div>
                            <div className="text-black dark:text-white">
                                <span className="font-bold">Languages:</span>&nbsp;
                                {dataDetailCountry?.languages && Object.values(dataDetailCountry.languages).join(', ')}
                            </div>
                        </div>
                    </div>

                    <div className="flex sm:items-center flex-col sm:flex-row gap-4 pt-10 text-black dark:text-white">
                        <span className="font-bold">Border Country</span>
                        <div className="flex gap-3">
                            {/* Giả sử bạn sẽ lấy dữ liệu biên giới từ API hoặc đối tượng `dataDetailCountry` */}
                            <span className="px-4 py-1 shadow-allSide">France</span>
                            <span className="px-4 py-1 shadow-allSide">Germany</span>
                            <span className="px-4 py-1 shadow-allSide">Italy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailFlag;
