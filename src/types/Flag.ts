export interface IFlags {
    png: string;
    svg: string;
}

export interface ICountryData {
    name: { common: string };
    flags: IFlags;
    population: number;
    region: string;
    capital: string[];
}

export interface IFilteredCountries {
    filteredCountries: ICountryData[] | undefined
}

interface Currency {
    name: string;
    symbol: string;
}

export interface IdetailCountryData {
    flags: { png: string }
    name: { common: string, nativeName: { [key: string]: { common: string } } },
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    tld: string[],
    currencies: { [key: string]: Currency };
    languages: { [key: string]: string },
}
