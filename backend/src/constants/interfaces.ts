export interface IOrder {
    id: number;
    name?: string;
    status: string;
    users?: IUser[];
}

export interface IUser {
    id: number;
    name?: string;
    email?: string;
}

export enum IOrderStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
}
