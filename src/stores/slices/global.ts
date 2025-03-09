"use client"
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores';
import { GlobalTypes } from '@types';

/* Set Initial Data */
const initialState: Partial<GlobalTypes> = {};

/* Create Slice */
const slice = createSlice({
    name: 'global',
    initialState,
    reducers: {
    }
});

/* Export Actions And Reducer */
export const getGlobals = (state: RootState) => state.global;
export const { } = slice.actions;
export default slice.reducer;