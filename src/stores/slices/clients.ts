"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { fetchData } from '@utils';
import { Client } from '@types';

/* Fetch Initial Client Data (required for global Client data) */
export const fetchClients = createAsyncThunk('clients/fetch', async () => {
    const data = await fetchData('clients');
    return data;
});

/* Create Slice */
const clientSlice = createSlice({
    name: 'clients',
    initialState: {
        data: [] as Client[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        addClient: (state, action: { payload: Client }) => {
            //console.log('Before adding:', state.data); // Log current state
            state.data = [...state.data, action.payload];
            //console.log('After adding:', state.data); // Log updated state
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch clients';
                state.data = []; 
            });
    },
});

/* Export Actions And Reducer */
export const getClients = (state: RootState) => state.clients;
export const { addClient } = clientSlice.actions;
export default clientSlice.reducer;