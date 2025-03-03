import React from 'react';
import { Card, CardIcon, CardLabel, CardValue } from '@core/components/Cards';

export const CardOpenWorkOrders =()=> {
    return (
        <Card>
            <CardIcon icon="far fa-list-alt" />
            <CardLabel>Open Work Orders <span>(02/10/25 - 04/02/25)</span></CardLabel>
            <CardValue value="123123456" valueFormat="usd" />
        </Card>
    );
};