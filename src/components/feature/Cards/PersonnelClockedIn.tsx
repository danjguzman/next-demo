"use client"
import React from 'react';
import { Card } from '@components/global/Cards';
import { useHomePageSummaryStore } from '@core/stores';

export const CardPersonnelClockedIn =()=> {
    const clockedIn = useHomePageSummaryStore(state => state.homePageSummary.clockedIn);

    return (
        <Card icon="far fa-users" label="Personnel Dispatched" value={clockedIn} />
    );
};