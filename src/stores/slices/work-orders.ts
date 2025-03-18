"use client"
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { IWorkOrders } from '@types';

/* Create Slice */
const workOrdersSlice = createSlice({
    name: 'workOrders',
    initialState: [] as IWorkOrders[],
    reducers: {
        setStoreWorkOrders: (_, action: { payload: IWorkOrders[] }) => {
            return action.payload;
        },
    },
});

/* Export Actions And Reducer */
export const getWorkOrders = (state: RootState) => state.workOrders;
export const { setStoreWorkOrders } = workOrdersSlice.actions;
export default workOrdersSlice.reducer;