import { mockDataClients, mockDataSites, mockWorkOrders }  from './mock-server-data';
import { create } from 'zustand';

interface Client {
    id: number;
    name: string;
    active: boolean;
}

interface ClientPrefixed {
    clientId: number;
    clientName: string;
    clientActive: boolean;
};

interface Site {
    id: number;
    clientId: number;
    name: string;
    location: string;
    clockedIn: number;
    billing: number;
    active: boolean;
    coords: {
        lat: number;
        lng: number;
    }
}

interface HomePageSummary {
    openWorkOrders: number;
    billingSummary: number;
    clockedIn: number;
};

interface HomePageSummaryStore {
    homePageSummary: HomePageSummary;
    setHomePageSummary: (summary: HomePageSummary) => void;
};

interface SitesWithClientsStore {
    sitesWithClients: SiteWithClient[];
    setSitesWithClients: (sites: SiteWithClient[]) => void;
};

type SiteWithClient = Site & Partial<ClientPrefixed>;

/**************************************************
* Stores
**************************************************/

/* Build Homepage Cards Store */
export const useHomePageSummaryStore = create<HomePageSummaryStore>((set) => ({
    homePageSummary: {
        openWorkOrders: mockWorkOrders.filter(f=>f.dateOpened).length || 0,
        billingSummary: mockDataSites.reduce((acc, v)=>acc + v.billing, 0),
        clockedIn: mockDataSites.reduce((acc, v)=>acc + v.clockedIn, 0),
    },
    setHomePageSummary: (summary) => set({ homePageSummary: summary }),
}));

/* Build Sites Data With Client Data For Sites Table & Map */
function getSitesWithClients(): SiteWithClient[] {

    /* Merge Client Data To Sites Data With "clientKey" camelCasing */
    return mockDataSites.map((site)=>{
        const client = mockDataClients.find(f => f.id === site.clientId);
        const clientData = client ? Object.keys(client).reduce((acc, key) => {
            acc[`client${key.charAt(0).toUpperCase() + key.slice(1)}`] = client[key as keyof Client];
            return acc;
        }, {} as Record<string, any>) : {};
        
        return {
            ...site,
            ...clientData
        };
    });
};

/* Build Customer Data Store Hook */
export const useCustomerData = create<SitesWithClientsStore>((set) => ({
    sitesWithClients: getSitesWithClients(),
    setSitesWithClients: (sites) => set({ sitesWithClients: sites }),
}));