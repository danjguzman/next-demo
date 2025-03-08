"use client"
import React from 'react';
import { Card } from '@core/components/Cards';
import { useHomePageSummaryStore } from '@core/stores';

export const CardOpenWorkOrders =()=> {
    const openWorkOrders = useHomePageSummaryStore(state => state.homePageSummary.openWorkOrders);

    return (
        <Card icon="far fa-list-alt" label="Open Work Orders" value={openWorkOrders} />
    );
};