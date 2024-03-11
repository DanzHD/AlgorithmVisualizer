import {ResultStates} from "./ResultStates.tsx";

export interface ArraySort {
    generateArray: (size: number) => void,
    selectionSort: () => void,
    resultStates: ResultStates[],
    initialNumberArray: number[],
    count: number,
    chooseSort: () => void,
    increaseCount: () => void
}