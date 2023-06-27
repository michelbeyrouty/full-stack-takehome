import createIcon from "./assets/create.png";
import viewIcon from "./assets/view.png";

interface navOptions {
    [key: string]: {
        icon: any,
        link: string
    }
}

const navOptions: navOptions = {
    "create": {
        icon: createIcon,
        link: "/create",
    },
    "view": {
        icon: viewIcon,
        link: "/view",
    },
}

export default {
    navOptions
}
