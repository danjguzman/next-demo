"use client"; 
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

/* Development Token */
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGFuamd1em1hbiIsImEiOiJjbTdyOG5ud3AwdzQ3MnBvYWIxbW9yaGpsIn0.lk1SrVUaSNHkaUebowu0NA';

export const MapsFrontPage: React.FC = () => {
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_TOKEN;
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