"use client"
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { ISites } from '@types';

/* Create Slice */
const sitesSlice = createSlice({
    name: 'sites',
    initialState: [] as ISites[],
    reducers: {
        setStoreSites: (_, action: { payload: ISites[] }) => {
            return action.payload;
        },
    },
});

/* Export Actions And Reducer */
export const getSites = (state: RootState) => state.sites;
export const { setStoreSites } = sitesSlice.actions;
export default sitesSlice.reducer;