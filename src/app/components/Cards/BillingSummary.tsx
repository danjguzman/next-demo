"use client"
import React from 'react';
import { Card, CardIcon, CardLabel, CardValue } from '@core/components/Cards';
import { useHomePageSummaryStore } from '@core/stores';

export const CardBillingSummary =()=> {
    const billingSummary = useHomePageSummaryStore(state => state.homePageSummary.billingSummary);

    return (
        <Card>
            <CardIcon icon="far fa-money-bill-alt" />
            <CardLabel>Billing Summary <span>(02/10/25 - 04/02/25)</span></CardLabel>
            <CardValue value={billingSummary} valueFormat="usd" />
        </Card>
    );
};