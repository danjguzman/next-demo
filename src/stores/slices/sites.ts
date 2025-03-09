"use client"
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { fetchData } from '@utils';
import { SiteTypes } from '@types';

/* Fetch Initial Data */
let initialState: SiteTypes[] = [];
try {
  
    initialState = await fetchData('sites');

} catch (error) {

    console.error("Error fetching:", error);
    initialState = [];

};

/* Create Slice */
const slice = createSlice({
    name: 'sites',
    initialState,
    reducers: {

        /* Add Data */
        addSite: (state, action: { payload: SiteTypes }) => {
            state.push(action.payload);
        },

        /* Toggle Active Status */
        toggleActive: (state, action: { payload: number }) => {
            const store = state.find(c => c.id === action.payload);
            if (store) store.active = !store.active;
        }
    }
});

/* Export Actions And Reducer */
export const getSites = (state: RootState) => state.sites;
export const { addSite, toggleActive } = slice.actions;
export default slice.reducer;