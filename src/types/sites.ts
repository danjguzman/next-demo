export interface SiteTypes {
    id: number;
    clientId: number;
    name: string;
    address: string;
    location: string;
    clockedIn: number;
    billing: number;
    active: boolean;
    coords: {
        lat: number;
        lng: number;
    };
    locationLat: number;
    locationLng: number;
};

export interface SiteClientsTypes extends SiteTypes {
    clientName: string;
    clientActive: boolean;
};

