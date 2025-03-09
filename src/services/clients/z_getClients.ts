import { fetchClients } from '@services/clients';

export async function getUser() {

    try {

        const clients = await fetchClients(); 

        console.log(clients);

    } catch (error) {
        
        console.error("Failed to fetch user:", error);

    };
};