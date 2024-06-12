import { createContext } from "react";
import { emptyData } from "../fakeData/fakeData";


export default createContext({
    navigation:'map',
    setNavigation: () => {},

    capitalSelected:emptyData,
    setCapitalSelected: () => {},

    adminPanelSelected: 'add',
    setAdminPanelSelected: () => {},

})