"use client"
import React from 'react';
import { Card } from '@core/components/Cards';
import { useHomePageSummaryStore } from '@core/stores';

export const CardPersonnelClockedIn =()=> {
    const clockedIn = useHomePageSummaryStore(state => state.homePageSummary.clockedIn);

    return (
        <Card icon="far fa-users" label="Personnel Clocked In" value={clockedIn} />
    );
};