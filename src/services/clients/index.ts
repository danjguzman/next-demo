import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { addClient } from '@stores/slices/clients';
import React from 'react';

export interface ClientTypes {
    id: number;
    name: string;
    active: boolean;
};

export class ClientService extends React.Component<{ dispatch: Dispatch }> {

    /* Fetch Data */
    private async fetchData(endpoint: string): Promise<ClientTypes> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    };

    /* Get Client Data */
    public async getClients(): Promise<ClientTypes> {
        const data = await this.fetchData('clients');
        //console.log(data);

        this.props.dispatch(
            addClient({
                id: 2,
                name: 'd',
                active: false,
            })
        );

        return data;
    };
};

export default connect()(ClientService);