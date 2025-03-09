import { configureStore } from '@reduxjs/toolkit';
import clientReducer from '@stores/slices/clients';
import sitesReducer from '@stores/slices/sites';
import globalReducer from '@stores/slices/global';

/* Configure Stores */
const store = configureStore({
    reducer: {
        clients: clientReducer,
        sites: sitesReducer,
        global: globalReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;