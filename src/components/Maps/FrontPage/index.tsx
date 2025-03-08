"use client";
import { useEffect, useRef } from 'react';
import { useCustomerData } from '@core/stores';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapsFrontPage: React.FC = () => {
    const { sitesWithClients } = useCustomerData();
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const mapContainerRef = useRef(null);

    /* Custom Markers Options */
    const markerOptions = {
        outerSize: 50,
        borderRadius: 0,
        mainRadius: 40,
        innerRadius: 20,
        mainColor: '#FF6200',
        innerColor: 'white',
        mainOpacity: 0.5,
        innerOpacity: 0.75,
    };

    /* Generate SVG */
    const generateMarkerSVG = ({
        outerSize,
        mainRadius,
        innerRadius,
        mainColor,
        innerColor,
        mainOpacity,
        innerOpacity,
    }: {
        outerSize: number;
        borderRadius: number;
        mainRadius: number;
        innerRadius: number;
        mainColor: string;
        innerColor: string;
        mainOpacity: number;
        innerOpacity: number;
    }) => {
        return `
            <svg width="${outerSize}" height="${outerSize}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="${mainRadius}" fill="${mainColor}" fill-opacity="${mainOpacity}" />
                <circle cx="50" cy="50" r="${innerRadius}" fill="${innerColor}" fill-opacity="${innerOpacity}" />
            </svg>
        `;
    };

    /* Convert SVG to PNG */
    function svgToPng(svgString: string, callback: (dataUrl: string) => void) {
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = markerOptions.outerSize;
        canvas.height = markerOptions.outerSize;
        img.onload = () => {
            ctx?.drawImage(img, 0, 0, markerOptions.outerSize, markerOptions.outerSize);
            callback(canvas.toDataURL('image/png'));
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
    };

    /* Mapbox Init */
    useEffect(() => {

        /* Mapbox Init */
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN_PUBLIC;
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current as unknown as HTMLElement,
            zoom: 3,
            bounds: [
                [-125.00165, 24.9493], // Southwest coordinates of the US
                [-66.9326, 49.5904],   // Northeast coordinates of the US
            ],
            style: 'mapbox://styles/danjguzman/cm7ste3xi007k01st0lu35r83',
        });

        /* Add Pins To Mapbox */
        mapRef.current.on('load', ()=>{

            /* Generate SVG */
            const svgString = generateMarkerSVG(markerOptions);

            /* Convert SVG To PNG */
            svgToPng(svgString, (pngDataUrl)=>{
                mapRef.current?.loadImage(pngDataUrl, (error, image) => {
                    if (error) {
                        console.error('Error loading marker image:', error);
                        return;
                    };

                    /* Add Marker To Mapbox */
                    if (image) mapRef.current?.addImage('custom-marker', image);

                    /* Add Custom SVG Markers */
                    const geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
                        type: 'FeatureCollection',
                        features: sitesWithClients.map((site) => ({
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [site.coords.lng, site.coords.lat],
                            },
                            properties: {},
                        })),
                    };

                    /* Add Markers */
                    mapRef.current?.addSource('markers', {
                        type: 'geojson',
                        data: geojson,
                    });

                    /* Add Markers Layer */
                    mapRef.current?.addLayer({
                        id: 'markers-layer',
                        type: 'symbol',
                        source: 'markers',
                        layout: {
                            'icon-image': 'custom-marker',
                            'icon-size': 0.5,
                            'icon-allow-overlap': true,
                        },
                    });

                    /* Change Cursor On Mouse Over */
                    mapRef.current?.on('mouseenter', 'markers-layer', ()=>{ if (mapRef.current) mapRef.current.getCanvas().style.cursor = 'pointer'; });
                    mapRef.current?.on('mouseleave', 'markers-layer', ()=>{ if (mapRef.current) mapRef.current.getCanvas().style.cursor = ''; });

                });
            });
        });

        return () => {
            mapRef.current?.remove();
        };
    }, [sitesWithClients]);

    return (
        <>
            <div id="map-container" ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
        </>
    );
};