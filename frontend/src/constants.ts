import createIcon from "./assets/create.png";
import ordersIcon from "./assets/view.png";

export interface IOrder {
    id?: number;
    name?: string;
    status?: string;
    assignees?: string[];
}

export enum IOrderStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
}


interface navOptions {
    [key: string]: {
        icon: any,
        link: string
    }
}

export const navOptions: navOptions = {
    "create": {
        icon: createIcon,
        link: "/create",
    },
    "orders": {
        icon: ordersIcon,
        link: "/orders",
    },
}
