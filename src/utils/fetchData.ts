/**************************************************
* Fetch Data Utility Function
**************************************************/

export async function fetchData(endpoint: string) {
    try {

        /* Fetch Data From Endpoint */
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);

        /* Check If The Response Is Okay (status 200-299) & Return JSON Data */
        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        return await response.json();

    } catch (error) {
        
        /*  Handle Errors (network issues, bad response, etc.) */
        if (error instanceof Error)
            console.error('Failed to fetch clients:', error.message); else
            console.error('Failed to fetch clients:', error);

        /* Throw So The Caller (like Redux) Can Handle It Too */
        throw error; 

    };
};