import React, {createContext, useEffect, useState} from "react";
import {themes} from "./themesEnum.tsx";
import {IContextData} from "./contextDataInterface.tsx";

export const ThemeContext = createContext<IContextData>({theme: themes.light, handleToggleTheme: () => null});

export function ThemeContextProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<themes>(themes.light);

    function handleToggleTheme() {
        setTheme(theme === themes.light ? themes.dark : themes.light);

    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    const contextData: IContextData = {
        theme,
        handleToggleTheme
    }


    return (
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    )
}