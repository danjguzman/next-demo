"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@stores/index";
import { setStoreClients } from '@stores/slices/clients';
import { setStoreSites } from '@stores/slices/sites';
import { IClients, ISites, IWorkOrders, IWorkOrdersCategories } from '@types';
import { setStoreWorkOrders } from "@stores/slices/work-orders";

interface InitDataInterface {
    clients: IClients[],
    sites: ISites[],
    workOrders: IWorkOrders[],
    workOrdersCategories: IWorkOrdersCategories[],
};

/* Fetch INIT Data Required For App */
async function fetchData(): Promise<InitDataInterface> {
    try {

        /* Get Multiple Fetches */
        const endpoints = [
            fetch("http://localhost:3010/clients", { cache: "no-store" }),
            fetch("http://localhost:3010/sites", { cache: "no-store" }),
            fetch("http://localhost:3010/work-orders", { cache: "no-store" }),
            fetch("http://localhost:3010/work-orders-categories", { cache: "no-store" }),
        ];

        /*  Wait For All Fetches To Complete */
        const responses = await Promise.all(endpoints);

        /* Check If All Responses Are OK */
        const errors = responses.filter((res) => !res.ok);
        if (errors.length > 0) {
            const errorDetails = errors.map((res) => `Status: ${res.status}`).join(", ");
            throw new Error(`HTTP errors! ${errorDetails}`);
        };

        /* Parse All Responses To JSON */
        const results = await Promise.all(responses.map((res) => res.json()));
        return {
            clients: results[0],
            sites: results[1],
            workOrders: results[2],
            workOrdersCategories: results[3],
        };

    } catch (error) {

        console.error("Error in fetchData:", error);
        throw error; // Re-throw for caller to handle, if desired

    };
};

/* Required Base Init Data For Site To Function */
export const InitData = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    try {
        
        /* Load Data & Store Into Redux Toolkit */
        useEffect(() => {
            const loadData = async () => {
                const { clients, sites, workOrders, workOrdersCategories } = await fetchData();
                //console.log("getFetchedData", getFetchedData);
                dispatch(setStoreClients(clients));
                dispatch(setStoreSites(sites));

                /* WORK ORDERS: Merge Categories Into Work Orders */
                const wo = workOrders.map((order)=>{
                    return {
                        ...order,
                        categories: workOrdersCategories.filter(wo => order.categoryId.includes(wo.id))
                    };
                });
                console.log(wo);
                dispatch(setStoreWorkOrders(wo));
            };
            loadData();
        }, [dispatch]);

        return <></>;
        
    } catch (error) {
        
        return <div>Error loading data {(error as Error).message}</div>;
        
    };
};