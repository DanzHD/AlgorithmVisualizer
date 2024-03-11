import {ResultStates} from "./ResultStates.tsx";
import {SortMethods} from "../../Utils/enum.tsx";

export interface ArraySort {
    generateArray: (size: number) => void,
    selectionSort: () => void,
    resultStates: ResultStates[],
    initialNumberArray: number[],
    count: number,
    chooseSort: (sortingMethod: SortMethods) => void,
    increaseCount: () => void
}