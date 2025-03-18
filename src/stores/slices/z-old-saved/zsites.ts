"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { fetchData } from '@utils';
import { Client } from '@types';

/* Fetch Initial Client Data (required for global Client data) */
export const fetchSites = createAsyncThunk('sites/fetch', async () => {
    const data = await fetchData('sites');
    return data;
});

/* Create Slice */
const sitesSlice = createSlice({
    name: 'sites',
    initialState: {
        data: [] as Client[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        setStoreSites: (state, action: { payload: Client }) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSites.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch sites';
                state.data = []; 
            });
    },
});

/* Export Actions And Reducer */
export const getSites = (state: RootState) => state.sites;
export const { setStoreSites } = sitesSlice.actions;
export default sitesSlice.reducer;