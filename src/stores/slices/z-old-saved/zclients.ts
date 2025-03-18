"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { fetchData } from '@utils';
import { IClients } from '@types';

/* Fetch Initial Client Data (required for global Client data) */
export const fetchClients = createAsyncThunk('clients/fetch', async () => {
    const data: IClients[] = await fetchData('clients');
    return data;
});

/* Create Slice */
const clientSlice = createSlice({
    name: 'clients',
    initialState: {
        data: [] as IClients[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        setStoreClients: (state, action: { payload: IClients[] }) => {
            state.data = action.payload;
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
export const { setStoreClients } = clientSlice.actions;
export default clientSlice.reducer;