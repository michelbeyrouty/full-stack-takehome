import createIcon from "./assets/create.png";
import ordersIcon from "./assets/view.png";
import productivityIcon from "./assets/productivity.png"

export interface IOrder {
    id?: number;
    name?: string;
    status?: string;
    assignees?: IUser[];
}

export interface IUser {
    id?: number;
    name?: string;
    email?: string;
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
    "productivity": {
        icon: productivityIcon,
        link: "/productivity",
    },
}
