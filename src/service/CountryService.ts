import axios from "axios"
const baseURL = "https://restcountries.com/v3.1/"

export const getAllCountry = () => {
    return axios.get(`${baseURL}all`)
}

export const getAllCountryInRegion = (region: string) => {
    return axios.get(`${baseURL}region/${region}`)
}

//detail country
export const getDetailCountry = (country: string) => {
    return axios.get(`${baseURL}name/${country}`)
}
