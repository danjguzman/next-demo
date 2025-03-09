let mapInstance: mapboxgl.Map | null = null;

export const setMapInstance = (map: mapboxgl.Map) => {
    mapInstance = map;
};

/* Utility To Call Map Methods Safely */
export const updateMap = (callback: (map: mapboxgl.Map) => void) => {
    if (mapInstance) {
        callback(mapInstance);
    } else {
        console.warn('Map instance not initialized yet');
    }
};