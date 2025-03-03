"use client"; 
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapsFrontPage: React.FC = () => {
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN_PUBLIC;
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current as unknown as HTMLElement,
        });

        return () => {
            mapRef.current?.remove();
        }
    }, []);
    
    return (
        <>
            <div id='map-container' ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
        </>
    );
};