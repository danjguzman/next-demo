export interface IWorkOrders {
    id: number;
    siteId: number;
    orders: number[];
    issues: number[];
    assigned: number[];
    categoryId: number[];
    categories: IWorkOrdersCategories[];
    dateCreated: string;
    dateStarted: string | null;
    dateModified: string | null;
    dateCompleted: string | null;
    dateClosed: string | null;
};

export interface IWorkOrdersCategories {
    id: number;
    category: string;
};
