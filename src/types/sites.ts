export interface ISites {
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
    countryCoords: {
        lngSouthWest: number;
        latSouthWest: number;        
        lngNorthEast: number;
        latNorthEast: number;
    };
    locationLat: number;
    locationLng: number;
};

export interface ISiteClients extends ISites {
    clientName?: string;
    clientActive?: boolean;
};

