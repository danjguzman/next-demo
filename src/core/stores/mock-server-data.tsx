interface Client {
    id: number;
    name: string;
    active: boolean;
}

interface Site {
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
    }
}

interface WorkOrder {
    id: number;
    siteId: number;
    dateOpened: Date | null;
    dateClosed: Date | null;
    dateScheduled: Date | null;
    dateStarted: Date | null;
    dateCloseEstimate: Date | null;
    costEstimated: number;
    costFinal: number | null;
}

interface HomePageSummary {
    openWorkOrders: number;
    billingSummary: number;
    clockedIn: number;
}

interface HomePageSummaryStore {
    homePageSummary: HomePageSummary;
    setHomePageSummary: (summary: HomePageSummary) => void;
}

export const mockDataClients: Client[] = [
    {
        id: 1,
        name: 'NEC Corporation',
        active: true,
    },
    {
        id: 2,
        name: 'Nintendo Co., Ltd.',
        active: true,
    },
    {
        id: 3,
        name: 'Sega Corporation',
        active: true,
    },
    {
        id: 4,
        name: 'Sega Of America, Inc.',
        active: true,
    },
    {
        id: 5,
        name: 'Sony Interactive Entertainment Inc.',
        active: true,
    },
    {
        id: 6,
        name: 'Sony Interactive Entertainment LLC',
        active: true,
    },
    {
        id: 7,
        name: 'Xbox Game Studios',
        active: true,
    },
    {
        id: 8,
        name: 'Atari, Inc.',
        active: true,
    },
    {
        id: 9,
        name: 'Electronic Arts Inc.',
        active: true,
    },
    {
        id: 10,
        name: 'Ubisoft Entertainment SA', // France HQ
        active: true,
    },
    {
        id: 11,
        name: 'Sunsoft',
        active: true,
    },
    {
        id: 12,
        name: 'Capcom Co., Ltd.',
        active: true,
    },
    {
        id: 13,
        name: 'Konami Digital Entertainment Co., Ltd.',
        active: true,
    },
    {
        id: 14,
        name: 'Ubisoft Montreal', // Canadian studio
        active: true,
    },
];

export const mockDataSites: Site[] = [
    {
        id: 1,
        clientId: 1,
        name: 'Tokyo',
        location: 'Japan',
        clockedIn: 9,
        billing: 12589,
        active: true,
        address: '5-7-1 Shiba, Minato-ku, Tokyo 108-8001, Japan', // NEC Corporation HQ
        coords: { lat: 35.6586, lng: 139.7454 },
    },
    {
        id: 2,
        clientId: 2,
        name: 'Kyoto',
        location: 'Japan',
        clockedIn: 12,
        billing: 56649,
        active: true,
        address: '11-1 Kamitoba Hokotate-cho, Minami-ku, Kyoto 601-8501, Japan', // Nintendo HQ
        coords: { lat: 34.9669, lng: 135.7556 },
    },
    {
        id: 3,
        clientId: 3,
        name: 'Tokyo',
        location: 'Japan',
        clockedIn: 10,
        billing: 66589,
        active: true,
        address: '1-1-1 Nishi-Shinagawa, Shinagawa-ku, Tokyo 141-0033, Japan', // Sega Corporation HQ
        coords: { lat: 35.6201, lng: 139.7378 },
    },
    {
        id: 4,
        clientId: 4,
        name: 'Irvine',
        location: 'United States',
        clockedIn: 5,
        billing: 1875,
        active: true,
        address: '6400 Oak Canyon, Suite 100, Irvine, CA 92618, USA', // Sega of America HQ
        coords: { lat: 33.6709, lng: -117.7694 },
    },
    {
        id: 5,
        clientId: 4,
        name: 'Redwood City',
        location: 'United States',
        clockedIn: 3,
        billing: 26885,
        active: true,
        address: '255 Shoreline Drive, Redwood City, CA 94065, USA', // Historical Sega of America office
        coords: { lat: 37.5220, lng: -122.2590 },
    },
    {
        id: 6,
        clientId: 5,
        name: 'Tokyo',
        location: 'Japan',
        clockedIn: 8,
        billing: 45000,
        active: true,
        address: '1-7-1 Konan, Minato-ku, Tokyo 108-0075, Japan', // Sony Interactive Entertainment Inc. HQ
        coords: { lat: 35.6270, lng: 139.7425 },
    },
    {
        id: 7,
        clientId: 6,
        name: 'San Mateo',
        location: 'United States',
        clockedIn: 7,
        billing: 32000,
        active: true,
        address: '2207 Bridgepointe Pkwy, San Mateo, CA 94404, USA', // Sony Interactive Entertainment LLC HQ
        coords: { lat: 37.5610, lng: -122.2790 },
    },
    {
        id: 8,
        clientId: 7,
        name: 'Redmond',
        location: 'United States',
        clockedIn: 10,
        billing: 58000,
        active: true,
        address: '1 Microsoft Way, Redmond, WA 98052, USA', // Xbox Game Studios
        coords: { lat: 47.6396, lng: -122.1306 },
    },
    {
        id: 9,
        clientId: 8,
        name: 'New York',
        location: 'United States',
        clockedIn: 6,
        billing: 15000,
        active: true,
        address: '119 West 24th Street, New York, NY 10011, USA', // Atari, Inc. HQ
        coords: { lat: 40.7439, lng: -73.9930 },
    },
    {
        id: 10,
        clientId: 9,
        name: 'Redwood City',
        location: 'United States',
        clockedIn: 11,
        billing: 42000,
        active: true,
        address: '209 Redwood Shores Pkwy, Redwood City, CA 94065, USA', // EA HQ
        coords: { lat: 37.5228, lng: -122.2561 },
    },
    {
        id: 11,
        clientId: 10,
        name: 'Montreuil',
        location: 'France',
        clockedIn: 9,
        billing: 38000,
        active: true,
        address: '28 Rue Armand Carrel, 93100 Montreuil, France', // Ubisoft Entertainment SA HQ
        coords: { lat: 48.8640, lng: 2.4433 },
    },
    {
        id: 12,
        clientId: 11,
        name: 'Nagoya',
        location: 'Japan',
        clockedIn: 7,
        billing: 22000,
        active: true,
        address: '1-1-1 Sakae, Naka-ku, Nagoya, Aichi 460-0008, Japan', // Sunsoft HQ
        coords: { lat: 35.1709, lng: 136.9086 },
    },
    {
        id: 13,
        clientId: 12,
        name: 'Osaka',
        location: 'Japan',
        clockedIn: 8,
        billing: 35000,
        active: true,
        address: '2-4-1 Chuo-ku, Osaka 540-8511, Japan', // Capcom HQ
        coords: { lat: 34.6863, lng: 135.5142 },
    },
    {
        id: 14,
        clientId: 13,
        name: 'Tokyo',
        location: 'Japan',
        clockedIn: 10,
        billing: 47000,
        active: true,
        address: '9-7-2 Akasaka, Minato-ku, Tokyo 107-8324, Japan', // Konami HQ
        coords: { lat: 35.6716, lng: 139.7352 },
    },
    {
        id: 15,
        clientId: 14,
        name: 'Montreal',
        location: 'Canada',
        clockedIn: 12,
        billing: 60000,
        active: true,
        address: '5505 boulevard St-Laurent, #2000, Montreal, Quebec, H2T 1S6, Canada', // Ubisoft Montreal HQ
        coords: { lat: 45.5267, lng: -73.5950 },
    },
];

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

//export const workOrders: WorkOrder[] = [
//    {
//        id: 1,
//        siteId: 1,
//        dateOpened: yesterday,      // When the W.O. was opened.
//        dateClosed: null,           // When the W.O. was closed.
//        dateScheduled: null,        // When the physical work is scheduled.
//        dateStarted: null,          // When the physical work started.
//        dateCloseEstimate: null,    // When the physical work was estimated to be closed, for "on-time" tracking.
//        costEstimated: 1000,        // The estimated cost when W.O. was opened.
//        costFinal: 1500,            // The final cost when W.O. is closed.
//    }
//];

export const mockWorkOrders: WorkOrder[] = [
    {
        id: 1,
        siteId: 1,
        dateOpened: new Date('2025-03-02'),
        dateClosed: null,
        dateScheduled: new Date('2025-03-05'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-07'),
        costEstimated: 1000,
        costFinal: null
    },
    {
        id: 2,
        siteId: 1,
        dateOpened: new Date('2024-12-01'),
        dateClosed: new Date('2025-01-15'),
        dateScheduled: new Date('2024-12-05'),
        dateStarted: new Date('2024-12-06'),
        dateCloseEstimate: new Date('2025-01-10'),
        costEstimated: 2000,
        costFinal: 2100
    },
    {
        id: 3,
        siteId: 1,
        dateOpened: new Date('2025-02-10'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-10'),
        costEstimated: 1500,
        costFinal: null
    },
    {
        id: 4,
        siteId: 2,
        dateOpened: new Date('2024-12-15'),
        dateClosed: new Date('2025-01-10'),
        dateScheduled: new Date('2024-12-20'),
        dateStarted: new Date('2024-12-22'),
        dateCloseEstimate: new Date('2025-01-05'),
        costEstimated: 5000,
        costFinal: 5500
    },
    {
        id: 5,
        siteId: 2,
        dateOpened: new Date('2025-02-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-05'),
        dateStarted: new Date('2025-02-06'),
        dateCloseEstimate: new Date('2025-02-15'),
        costEstimated: 3000,
        costFinal: null
    },
    {
        id: 6,
        siteId: 2,
        dateOpened: new Date('2024-11-01'),
        dateClosed: new Date('2024-12-01'),
        dateScheduled: new Date('2024-11-05'),
        dateStarted: new Date('2024-11-06'),
        dateCloseEstimate: new Date('2024-11-30'),
        costEstimated: 4000,
        costFinal: 4100
    },
    {
        id: 7,
        siteId: 2,
        dateOpened: new Date('2025-03-01'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-15'),
        costEstimated: 2500,
        costFinal: null
    },
    {
        id: 8,
        siteId: 2,
        dateOpened: new Date('2024-10-15'),
        dateClosed: new Date('2024-11-20'),
        dateScheduled: new Date('2024-10-20'),
        dateStarted: new Date('2024-10-21'),
        dateCloseEstimate: new Date('2024-11-15'),
        costEstimated: 3500,
        costFinal: 3600
    },
    {
        id: 9,
        siteId: 2,
        dateOpened: new Date('2025-01-10'),
        dateClosed: null,
        dateScheduled: new Date('2025-01-15'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-01-25'),
        costEstimated: 1800,
        costFinal: null
    },
    {
        id: 10,
        siteId: 2,
        dateOpened: new Date('2024-09-01'),
        dateClosed: new Date('2024-10-01'),
        dateScheduled: new Date('2024-09-05'),
        dateStarted: new Date('2024-09-06'),
        dateCloseEstimate: new Date('2024-09-30'),
        costEstimated: 6000,
        costFinal: 6200
    },
    {
        id: 11,
        siteId: 3,
        dateOpened: new Date('2025-02-01'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-15'),
        costEstimated: 2000,
        costFinal: null
    },
    {
        id: 12,
        siteId: 4,
        dateOpened: new Date('2025-01-20'),
        dateClosed: new Date('2025-02-15'),
        dateScheduled: new Date('2025-01-25'),
        dateStarted: new Date('2025-01-26'),
        dateCloseEstimate: new Date('2025-02-10'),
        costEstimated: 3000,
        costFinal: 3200
    },
    {
        id: 13,
        siteId: 4,
        dateOpened: new Date('2024-12-10'),
        dateClosed: null,
        dateScheduled: new Date('2024-12-15'),
        dateStarted: new Date('2024-12-16'),
        dateCloseEstimate: new Date('2025-01-01'),
        costEstimated: 2500,
        costFinal: null
    },
    {
        id: 14,
        siteId: 4,
        dateOpened: new Date('2025-02-20'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-05'),
        costEstimated: 1200,
        costFinal: null
    },
    {
        id: 15,
        siteId: 4,
        dateOpened: new Date('2024-11-15'),
        dateClosed: new Date('2024-12-20'),
        dateScheduled: new Date('2024-11-20'),
        dateStarted: new Date('2024-11-21'),
        dateCloseEstimate: new Date('2024-12-15'),
        costEstimated: 4000,
        costFinal: 4100
    },
    {
        id: 16,
        siteId: 4,
        dateOpened: new Date('2025-03-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-03-05'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-10'),
        costEstimated: 1800,
        costFinal: null
    },
    {
        id: 17,
        siteId: 5,
        dateOpened: new Date('2024-11-10'),
        dateClosed: new Date('2024-12-05'),
        dateScheduled: new Date('2024-11-15'),
        dateStarted: new Date('2024-11-16'),
        dateCloseEstimate: new Date('2024-12-01'),
        costEstimated: 2500,
        costFinal: 2700
    },
    {
        id: 18,
        siteId: 5,
        dateOpened: new Date('2025-02-15'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-20'),
        dateStarted: new Date('2025-02-21'),
        dateCloseEstimate: new Date('2025-03-01'),
        costEstimated: 3000,
        costFinal: null
    },
    {
        id: 19,
        siteId: 6,
        dateOpened: new Date('2025-03-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-03-04'),
        dateStarted: new Date('2025-03-04'),
        dateCloseEstimate: new Date('2025-03-10'),
        costEstimated: 1500,
        costFinal: null
    },
    {
        id: 20,
        siteId: 6,
        dateOpened: new Date('2024-12-20'),
        dateClosed: new Date('2025-01-20'),
        dateScheduled: new Date('2024-12-25'),
        dateStarted: new Date('2024-12-26'),
        dateCloseEstimate: new Date('2025-01-15'),
        costEstimated: 2000,
        costFinal: 2200
    },
    {
        id: 21,
        siteId: 6,
        dateOpened: new Date('2025-01-05'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-02-01'),
        costEstimated: 1800,
        costFinal: null
    },
    {
        id: 22,
        siteId: 6,
        dateOpened: new Date('2024-10-10'),
        dateClosed: new Date('2024-11-10'),
        dateScheduled: new Date('2024-10-15'),
        dateStarted: new Date('2024-10-16'),
        dateCloseEstimate: new Date('2024-11-05'),
        costEstimated: 3500,
        costFinal: 3600
    },
    {
        id: 23,
        siteId: 7,
        dateOpened: new Date('2024-10-01'),
        dateClosed: new Date('2024-11-15'),
        dateScheduled: new Date('2024-10-05'),
        dateStarted: new Date('2024-10-06'),
        dateCloseEstimate: new Date('2024-11-10'),
        costEstimated: 4000,
        costFinal: 4200
    },
    {
        id: 24,
        siteId: 7,
        dateOpened: new Date('2025-02-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-05'),
        dateStarted: new Date('2025-02-06'),
        dateCloseEstimate: new Date('2025-02-15'),
        costEstimated: 3000,
        costFinal: null
    },
    {
        id: 25,
        siteId: 7,
        dateOpened: new Date('2024-12-15'),
        dateClosed: new Date('2025-01-15'),
        dateScheduled: new Date('2024-12-20'),
        dateStarted: new Date('2024-12-21'),
        dateCloseEstimate: new Date('2025-01-10'),
        costEstimated: 2500,
        costFinal: 2600
    },
    {
        id: 26,
        siteId: 7,
        dateOpened: new Date('2025-03-02'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-20'),
        costEstimated: 1500,
        costFinal: null
    },
    {
        id: 27,
        siteId: 7,
        dateOpened: new Date('2024-11-01'),
        dateClosed: new Date('2024-12-01'),
        dateScheduled: new Date('2024-11-05'),
        dateStarted: new Date('2024-11-06'),
        dateCloseEstimate: new Date('2024-11-30'),
        costEstimated: 5000,
        costFinal: 5100
    },
    {
        id: 28,
        siteId: 7,
        dateOpened: new Date('2025-01-10'),
        dateClosed: null,
        dateScheduled: new Date('2025-01-15'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-01-25'),
        costEstimated: 2000,
        costFinal: null
    },
    {
        id: 29,
        siteId: 8,
        dateOpened: new Date('2025-02-15'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-20'),
        costEstimated: 3500,
        costFinal: null
    },
    {
        id: 30,
        siteId: 8,
        dateOpened: new Date('2024-12-01'),
        dateClosed: new Date('2025-01-05'),
        dateScheduled: new Date('2024-12-05'),
        dateStarted: new Date('2024-12-06'),
        dateCloseEstimate: new Date('2025-01-01'),
        costEstimated: 1800,
        costFinal: 2000
    },
    {
        id: 31,
        siteId: 8,
        dateOpened: new Date('2025-01-15'),
        dateClosed: null,
        dateScheduled: new Date('2025-01-20'),
        dateStarted: new Date('2025-01-21'),
        dateCloseEstimate: new Date('2025-02-01'),
        costEstimated: 4000,
        costFinal: null
    },
    {
        id: 32,
        siteId: 9,
        dateOpened: new Date('2024-12-01'),
        dateClosed: new Date('2025-01-05'),
        dateScheduled: new Date('2024-12-05'),
        dateStarted: new Date('2024-12-06'),
        dateCloseEstimate: new Date('2025-01-01'),
        costEstimated: 1800,
        costFinal: 2000
    },
    {
        id: 33,
        siteId: 9,
        dateOpened: new Date('2025-02-10'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-15'),
        dateStarted: new Date('2025-02-16'),
        dateCloseEstimate: new Date('2025-02-25'),
        costEstimated: 2500,
        costFinal: null
    },
    {
        id: 34,
        siteId: 9,
        dateOpened: new Date('2024-11-15'),
        dateClosed: new Date('2024-12-15'),
        dateScheduled: new Date('2024-11-20'),
        dateStarted: new Date('2024-11-21'),
        dateCloseEstimate: new Date('2024-12-10'),
        costEstimated: 3000,
        costFinal: 3100
    },
    {
        id: 35,
        siteId: 9,
        dateOpened: new Date('2025-03-01'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-15'),
        costEstimated: 1500,
        costFinal: null
    },
    {
        id: 36,
        siteId: 9,
        dateOpened: new Date('2024-10-01'),
        dateClosed: new Date('2024-11-01'),
        dateScheduled: new Date('2024-10-05'),
        dateStarted: new Date('2024-10-06'),
        dateCloseEstimate: new Date('2024-10-30'),
        costEstimated: 4000,
        costFinal: 4200
    },
    {
        id: 37,
        siteId: 9,
        dateOpened: new Date('2025-01-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-01-05'),
        dateStarted: new Date('2025-01-06'),
        dateCloseEstimate: new Date('2025-01-15'),
        costEstimated: 2000,
        costFinal: null
    },
    {
        id: 38,
        siteId: 9,
        dateOpened: new Date('2024-09-15'),
        dateClosed: new Date('2024-10-15'),
        dateScheduled: new Date('2024-09-20'),
        dateStarted: new Date('2024-09-21'),
        dateCloseEstimate: new Date('2024-10-10'),
        costEstimated: 3500,
        costFinal: 3600
    },
    {
        id: 39,
        siteId: 9,
        dateOpened: new Date('2025-02-20'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-25'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-05'),
        costEstimated: 1200,
        costFinal: null
    },
    {
        id: 40,
        siteId: 10,
        dateOpened: new Date('2025-01-15'),
        dateClosed: null,
        dateScheduled: new Date('2025-01-20'),
        dateStarted: new Date('2025-01-21'),
        dateCloseEstimate: new Date('2025-02-01'),
        costEstimated: 4500,
        costFinal: null
    },
    {
        id: 41,
        siteId: 10,
        dateOpened: new Date('2024-12-10'),
        dateClosed: new Date('2025-01-10'),
        dateScheduled: new Date('2024-12-15'),
        dateStarted: new Date('2024-12-16'),
        dateCloseEstimate: new Date('2025-01-05'),
        costEstimated: 3000,
        costFinal: 3200
    },
    {
        id: 42,
        siteId: 10,
        dateOpened: new Date('2025-02-15'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-01'),
        costEstimated: 2000,
        costFinal: null
    },
    {
        id: 43,
        siteId: 10,
        dateOpened: new Date('2024-11-01'),
        dateClosed: new Date('2024-12-01'),
        dateScheduled: new Date('2024-11-05'),
        dateStarted: new Date('2024-11-06'),
        dateCloseEstimate: new Date('2024-11-30'),
        costEstimated: 5000,
        costFinal: 5100
    },
    {
        id: 44,
        siteId: 11,
        dateOpened: new Date('2024-09-01'),
        dateClosed: new Date('2024-10-15'),
        dateScheduled: new Date('2024-09-05'),
        dateStarted: new Date('2024-09-06'),
        dateCloseEstimate: new Date('2024-10-10'),
        costEstimated: 3000,
        costFinal: 3100
    },
    {
        id: 45,
        siteId: 11,
        dateOpened: new Date('2025-02-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-05'),
        dateStarted: new Date('2025-02-06'),
        dateCloseEstimate: new Date('2025-02-15'),
        costEstimated: 2500,
        costFinal: null
    },
    {
        id: 46,
        siteId: 11,
        dateOpened: new Date('2024-12-15'),
        dateClosed: new Date('2025-01-15'),
        dateScheduled: new Date('2024-12-20'),
        dateStarted: new Date('2024-12-21'),
        dateCloseEstimate: new Date('2025-01-10'),
        costEstimated: 4000,
        costFinal: 4200
    },
    {
        id: 47,
        siteId: 11,
        dateOpened: new Date('2025-03-02'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-20'),
        costEstimated: 1500,
        costFinal: null
    },
    {
        id: 48,
        siteId: 11,
        dateOpened: new Date('2024-11-01'),
        dateClosed: new Date('2024-12-01'),
        dateScheduled: new Date('2024-11-05'),
        dateStarted: new Date('2024-11-06'),
        dateCloseEstimate: new Date('2024-11-30'),
        costEstimated: 3500,
        costFinal: 3600
    },
    {
        id: 49,
        siteId: 11,
        dateOpened: new Date('2025-01-10'),
        dateClosed: null,
        dateScheduled: new Date('2025-01-15'),
        dateStarted: new Date('2025-01-16'),
        dateCloseEstimate: new Date('2025-01-25'),
        costEstimated: 2000,
        costFinal: null
    },
    {
        id: 50,
        siteId: 11,
        dateOpened: new Date('2024-10-15'),
        dateClosed: new Date('2024-11-15'),
        dateScheduled: new Date('2024-10-20'),
        dateStarted: new Date('2024-10-21'),
        dateCloseEstimate: new Date('2024-11-10'),
        costEstimated: 5000,
        costFinal: 5100
    },
    {
        id: 51,
        siteId: 11,
        dateOpened: new Date('2025-02-20'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-25'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-05'),
        costEstimated: 1800,
        costFinal: null
    },
    {
        id: 52,
        siteId: 11,
        dateOpened: new Date('2024-12-01'),
        dateClosed: new Date('2025-01-01'),
        dateScheduled: new Date('2024-12-05'),
        dateStarted: new Date('2024-12-06'),
        dateCloseEstimate: new Date('2024-12-30'),
        costEstimated: 6000,
        costFinal: 6200
    },
    {
        id: 53,
        siteId: 12,
        dateOpened: new Date('2025-02-20'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-25'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-05'),
        costEstimated: 1200,
        costFinal: null
    },
    {
        id: 54,
        siteId: 13,
        dateOpened: new Date('2024-11-20'),
        dateClosed: new Date('2024-12-20'),
        dateScheduled: new Date('2024-11-25'),
        dateStarted: new Date('2024-11-26'),
        dateCloseEstimate: new Date('2024-12-15'),
        costEstimated: 2800,
        costFinal: 2900
    },
    {
        id: 55,
        siteId: 13,
        dateOpened: new Date('2025-02-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-05'),
        dateStarted: new Date('2025-02-06'),
        dateCloseEstimate: new Date('2025-02-15'),
        costEstimated: 3500,
        costFinal: null
    },
    {
        id: 56,
        siteId: 13,
        dateOpened: new Date('2024-12-15'),
        dateClosed: new Date('2025-01-15'),
        dateScheduled: new Date('2024-12-20'),
        dateStarted: new Date('2024-12-21'),
        dateCloseEstimate: new Date('2025-01-10'),
        costEstimated: 2000,
        costFinal: 2100
    },
    {
        id: 57,
        siteId: 13,
        dateOpened: new Date('2025-03-01'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-15'),
        costEstimated: 1500,
        costFinal: null
    },
    {
        id: 58,
        siteId: 13,
        dateOpened: new Date('2024-10-01'),
        dateClosed: new Date('2024-11-01'),
        dateScheduled: new Date('2024-10-05'),
        dateStarted: new Date('2024-10-06'),
        dateCloseEstimate: new Date('2024-10-30'),
        costEstimated: 4000,
        costFinal: 4200
    },
    {
        id: 59,
        siteId: 13,
        dateOpened: new Date('2025-01-15'),
        dateClosed: null,
        dateScheduled: new Date('2025-01-20'),
        dateStarted: new Date('2025-01-21'),
        dateCloseEstimate: new Date('2025-02-01'),
        costEstimated: 3000,
        costFinal: null
    },
    {
        id: 60,
        siteId: 14,
        dateOpened: new Date('2025-03-02'),
        dateClosed: null,
        dateScheduled: new Date('2025-03-06'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-12'),
        costEstimated: 2000,
        costFinal: null
    },
    {
        id: 61,
        siteId: 14,
        dateOpened: new Date('2024-12-01'),
        dateClosed: new Date('2025-01-01'),
        dateScheduled: new Date('2024-12-05'),
        dateStarted: new Date('2024-12-06'),
        dateCloseEstimate: new Date('2024-12-30'),
        costEstimated: 3500,
        costFinal: 3600
    },
    {
        id: 62,
        siteId: 15,
        dateOpened: new Date('2024-12-10'),
        dateClosed: new Date('2025-02-01'),
        dateScheduled: new Date('2024-12-15'),
        dateStarted: new Date('2024-12-16'),
        dateCloseEstimate: new Date('2025-01-25'),
        costEstimated: 6000,
        costFinal: 6200
    },
    {
        id: 63,
        siteId: 15,
        dateOpened: new Date('2025-02-15'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-20'),
        dateStarted: new Date('2025-02-21'),
        dateCloseEstimate: new Date('2025-03-01'),
        costEstimated: 3000,
        costFinal: null
    },
    {
        id: 64,
        siteId: 15,
        dateOpened: new Date('2024-11-01'),
        dateClosed: new Date('2024-12-01'),
        dateScheduled: new Date('2024-11-05'),
        dateStarted: new Date('2024-11-06'),
        dateCloseEstimate: new Date('2024-11-30'),
        costEstimated: 4000,
        costFinal: 4100
    },
    {
        id: 65,
        siteId: 15,
        dateOpened: new Date('2025-03-02'),
        dateClosed: null,
        dateScheduled: null,
        dateStarted: null,
        dateCloseEstimate: new Date('2025-03-15'),
        costEstimated: 2500,
        costFinal: null
    },
    {
        id: 66,
        siteId: 15,
        dateOpened: new Date('2024-10-15'),
        dateClosed: new Date('2024-11-15'),
        dateScheduled: new Date('2024-10-20'),
        dateStarted: new Date('2024-10-21'),
        dateCloseEstimate: new Date('2024-11-10'),
        costEstimated: 3500,
        costFinal: 3600
    },
    {
        id: 67,
        siteId: 15,
        dateOpened: new Date('2025-01-10'),
        dateClosed: null,
        dateScheduled: new Date('2025-01-15'),
        dateStarted: new Date('2025-01-16'),
        dateCloseEstimate: new Date('2025-01-25'),
        costEstimated: 2000,
        costFinal: null
    },
    {
        id: 68,
        siteId: 15,
        dateOpened: new Date('2024-09-01'),
        dateClosed: new Date('2024-10-01'),
        dateScheduled: new Date('2024-09-05'),
        dateStarted: new Date('2024-09-06'),
        dateCloseEstimate: new Date('2024-09-30'),
        costEstimated: 5000,
        costFinal: 5100
    },
    {
        id: 69,
        siteId: 15,
        dateOpened: new Date('2025-02-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-02-05'),
        dateStarted: null,
        dateCloseEstimate: new Date('2025-02-15'),
        costEstimated: 1800,
        costFinal: null
    },
    {
        id: 70,
        siteId: 15,
        dateOpened: new Date('2024-12-20'),
        dateClosed: new Date('2025-01-20'),
        dateScheduled: new Date('2024-12-25'),
        dateStarted: new Date('2024-12-26'),
        dateCloseEstimate: new Date('2025-01-15'),
        costEstimated: 4500,
        costFinal: 4700
    },
    {
        id: 71,
        siteId: 15,
        dateOpened: new Date('2025-03-01'),
        dateClosed: null,
        dateScheduled: new Date('2025-03-05'),
        dateStarted: new Date('2025-03-06'),
        dateCloseEstimate: new Date('2025-03-10'),
        costEstimated: 3000,
        costFinal: null
    }
];