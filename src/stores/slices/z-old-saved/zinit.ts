"use client"
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { fetchData } from '@utils';
import { TypesInit, TypesInitStore } from '@types';
import { setStoreClients } from '@stores/slices/clients';
import { setStoreSites } from '@stores/slices/sites';

/* Fetch Initial Client Data (required for global Client data) */
export const fetchInit = createAsyncThunk<TypesInit>('init/fetch', async (_, { dispatch, rejectWithValue }) => {
    try {
        const [clients, sites, workOrders] = await Promise.all([
            fetchData('clients'),
            fetchData('sites'),
            fetchData('work-orders')
        ]);

        //dispatch(setStoreClients(clients));
        //dispatch(setStoreSites(sites));
        //dispatch(setSites(sites));
        //dispatch(setWorkOrders(workOrders));

        return { clients, sites, workOrders };

    } catch (error) {

        return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');

    };
});

/* Create Slice */
const initSlice = createSlice({
    name: 'init',
    initialState: {
        data: {} as TypesInit,
        loading: false,
        error: null as string | null,
    } as TypesInitStore,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInit.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInit.fulfilled, (state, action: PayloadAction<TypesInit>) => {
                state.loading = false;
                console.log(action.payload)
                state.data = action.payload;
            })
            .addCase(fetchInit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch clients';
                state.data = {} as TypesInit;
            });
    },
});

/* Export Actions And Reducer */
export const getInit = (state: RootState) => state.init.data;
export default initSlice.reducer;
