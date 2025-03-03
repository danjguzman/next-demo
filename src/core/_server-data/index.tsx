import { create } from "zustand";

export const mockDataClients = [
    {
        id: 1,
        name: 'NEC',
        active: true,
    },
    {
        id: 2,
        name: 'Nintendo',
        active: true,
    },
    {
        id: 3,
        name: 'Sega Enteprises',
        active: true,
    },
    {
        id: 4,
        name: 'Sega Of America',
        active: true,
    },
];

export const mockDataSites = [
    {
        id: 1,
        clientId: 1,
        name: 'Tokyo',
        location: 'Japan',
        clockedIn: 9,
        billing: 12589,
        active: true,
    },
    {
        id: 2,
        clientId: 2,
        name: 'Tokyo',
        location: 'Japan',
        clockedIn: 12,
        billing: 56649,
        active: true,
    },
    {
        id: 3,
        clientId: 3,
        name: 'Tokyo',
        location: 'Japan',
        clockedIn: 10,
        billing: 66589,
        active: true,
    },
    {
        id: 4,
        clientId: 4,
        name: 'San Francisco',
        location: 'United States',
        clockedIn: 4,
        billing: 1875,
        active: true,
    },
    {
        id: 5,
        clientId: 4,
        name: 'Redwood City',
        location: 'United States',
        clockedIn: 4,
        billing: 26885,
        active: true,
    },
];

export const workOrders = [
    {
        id: 1,
        clientId: 1,
        siteId: 1,
        dateOpened: null,           // When the W.O. was opened.
        dateClosed: null,           // When the W.O. was closed.
        dateScheduled: null,        // When the physical work is scheduled.
        dateStarted: null,          // When the physical work started.
        dateCloseEstimate: null,    // When the physical work was estimated to be closed, for "on-time" tracking.
        costEstimated: 1000,        // The estimated cost when W.O. was opened.
        costFinal: 1500,            // The final cost when W.O. is closed.
    }
];

export const mockHomePageSummary = {
    openWorkOrders: 27,
    billingSummary: mockDataSites.reduce((acc, v)=>acc + v.billing, 0),
    personnelOnDuty: mockDataSites.reduce((acc, v)=>acc + v.clockedIn, 0),
};

/* Zustand Stores */

export const useHomePageSummaryStore = create((set) => ({
    homePageSummary: {
        openWorkOrders: mockHomePageSummary.openWorkOrders,
        billingSummary: mockHomePageSummary.billingSummary,
        personnelOnDuty: mockHomePageSummary.personnelOnDuty,
    },
    setHomePageSummary: (summary) => set({ homePageSummary: summary }),
}));