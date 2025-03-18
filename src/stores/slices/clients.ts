"use client"
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { IClients } from '@types';

/* Create Slice */
const clientSlice = createSlice({
    name: 'clients',
    initialState: [] as IClients[],
    reducers: {
        setStoreClients: (_, action: { payload: IClients[] }) => {
            return action.payload;
        },
    },
});

/* Export Actions And Reducer */
export const getClients = (state: RootState) => state.clients;
export const { setStoreClients } = clientSlice.actions;
export default clientSlice.reducer;