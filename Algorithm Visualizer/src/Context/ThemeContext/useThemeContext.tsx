import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.tsx";
import {IContextData} from "./contextDataInterface.tsx";


export function useThemeContext() {
    const context: IContextData = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemeContext must be used inside a ThemeContextProvider")
    }

    return context;
}