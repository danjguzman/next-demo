"use client";
import { Provider } from 'react-redux';
import store from './';

/* Needs To Be A Client Component To Wrap /app/layout.tsx */
export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
};