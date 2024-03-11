import {useContext} from "react";
import {ArraySortContext} from "./ArraySortContext.tsx";

export default function useArraySortContext() {
    const context = useContext(ArraySortContext);

    if (!context) {
        throw new Error("ArraySortContext must be used an ArraySortContextProvider");
    }

    return context;
}