"use client"
import { useEffect, useState } from "react";
import { mockDataClients, mockDataSites } from '@core/_server-data';

type Client = {
    id: number;
    name: string;
    active: boolean;
};

type Site = {
    id: number;
    clientId: number;
    name: string;
    location: string;
    clockedIn: number;
    active: boolean;
};

export const useClientsSites =()=> {
    const [getClients, setClients] = useState<Client[]>([]);
    const [getSites, setSites] = useState<Site[]>([]);

    /* Set Store Data */
    useEffect(()=>{

        /* Set Clients */
        setClients(mockDataClients);

        /* Set Sites */
        setSites(mockDataSites);

    }, []);

    /* Get Sites Data With Client Data */
    function getSitesWithClients() {
        return getSites.map((site)=>{
            return {
                ...site,
                client: getClients.find(f=>f.id===site.clientId)
            }
        });
    };

    return {
        getClients,
        setClients,
        getSites,
        setSites,
        getSitesWithClients,
    };
};