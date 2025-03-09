export interface Client {
    id: number;
    name: string;
    active: boolean;
}

export interface ClientTypes {
    data: Client[];
    loading: boolean;
    error: string | null;
};