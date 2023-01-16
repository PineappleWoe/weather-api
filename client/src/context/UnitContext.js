import { createContext } from "react";

export const UnitContext = createContext({
    unit: 'celsius',
    setUnit: () => {}
});