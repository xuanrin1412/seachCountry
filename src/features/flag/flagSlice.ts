import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface IFlag {
    textSearch: string;
    selectedRegion: string;
    callAllCountry: boolean;
};

const initialState: IFlag = {
    textSearch: '',
    selectedRegion: '',
    callAllCountry: false,
}

export const flagSlice = createSlice({
    name: 'flag',
    initialState,
    reducers: {
        setTextSearch: (state, action: PayloadAction<string>) => {
            state.textSearch = action.payload
        },
        setSelectedRegion: (state, action: PayloadAction<string>) => {
            state.selectedRegion = action.payload
        },
        setCallAllCountry: (state, action: PayloadAction<boolean>) => {
            state.callAllCountry = action.payload
        }
    },
})

export const { setTextSearch, setSelectedRegion, setCallAllCountry } = flagSlice.actions
export default flagSlice.reducer