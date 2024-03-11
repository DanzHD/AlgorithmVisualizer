import {ResultStates} from "./ResultStates.tsx";
import {SortMethods} from "../../Utils/enum.tsx";
import React from "react";

export interface ArraySort {
    generateArray: (size: number) => void,
    selectionSort: () => void,
    resultStates: ResultStates[],
    initialNumberArray: number[],
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
    chooseSort: (sortingMethod: SortMethods) => void,
    increaseCount: () => void,
    decreaseCount: () => void
    pause: boolean,
    setPause: React.Dispatch<React.SetStateAction<boolean>>,
    isSorting: boolean,
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,

}