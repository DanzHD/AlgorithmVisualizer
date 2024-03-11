import React, {createContext, useEffect, useState} from "react";
import {ArraySort} from "./ArraySortInterface.tsx";

export const ArraySortContext = createContext<ArraySort>({} as ArraySort);

export function ArraySortContextProvider({children}: {children: React.ReactNode}) {
    const [numberArray, setNumberArray] = useState<number[]>([]);

    useEffect(() => {
        generateArray(100);
    }, [])

    function generateArray(size: number) {
        const max: number = 200
        const min: number = 1

        const numberArray: Array<number> = []
        for (let i = 0; i < size; i++) {

            numberArray.push(Math.floor(Math.random() * (max - min) + min));
        }
        setNumberArray(numberArray)
    }


    const contextData: ArraySort = {
        numberArray,
        generateArray
    }

    return (

        <ArraySortContext.Provider value={contextData}>
            {children}
        </ArraySortContext.Provider>
    )
}
