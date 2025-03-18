import { configureStore } from '@reduxjs/toolkit';
import clientReducer from '@stores/slices/clients';
import sitesReducer from '@stores/slices/sites';
import workOrdersReducer from '@stores/slices/work-orders'

/* Configure Stores */
const store = configureStore({
    reducer: {
        clients: clientReducer,
        sites: sitesReducer,
        workOrders: workOrdersReducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;