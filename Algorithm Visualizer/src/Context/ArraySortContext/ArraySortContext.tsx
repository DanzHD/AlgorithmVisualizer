import React, {createContext, useEffect, useState} from "react";
import {ArraySort} from "./ArraySortInterface.tsx";
import {ResultStates} from "./ResultStates.tsx";
import {INITIAL_ARRAY_SIZE} from "../../Utils/Constants.tsx";
import {SortMethods} from "../../Utils/enum.tsx";

export const ArraySortContext = createContext<ArraySort>({} as ArraySort);

export function ArraySortContextProvider({children}: {children: React.ReactNode}) {

    const [resultStates, setResultStates] = useState<ResultStates[]>([]);
    const [initialNumberArray] = useState<number[]>([]);
    const [count, setCount] = useState(0);
    const [isSorting, setIsSorting] = useState(false);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        generateArray(INITIAL_ARRAY_SIZE);

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (count >= resultStates.length) {
            setCount(0)
        }

        if (!isSorting) return;

        if (pause) {
            return;
        }


        if (count < resultStates.length - 1) {
            setTimeout(() => {
                setCount(count => count + 1);

            }, 20)
        } else {
            setPause(true)
        }


    }, [resultStates, count, pause]);


    function generateArray(size: number) {

        const max: number = 200
        const min: number = 1
        const numberArray: number[] = []
        for (let i = 0; i < size; i++) {

            numberArray.push(Math.floor(Math.random() * (max - min) + min));
        }
        setResultStates([{
            comparedNumbers: [],
            numberArray: numberArray
        }]);

    }

    function selectionSort(): void {
        let arrayCopy = [...resultStates[0].numberArray];
        let newResultStates: ResultStates[]  = [];

        for (let i = 0; i < arrayCopy.length; i++) {
            let smallestValue = i;

            for (let j = i; j < arrayCopy.length; j++) {
                arrayCopy = [...arrayCopy];
                const newResultState = {
                    comparedNumbers: [smallestValue, j],
                    numberArray: arrayCopy
                }

                newResultStates = [...newResultStates, newResultState];
                if (arrayCopy[smallestValue] > arrayCopy[j]) {
                    smallestValue = j;
                }


            }
            swap(arrayCopy, i, smallestValue)
            storeResultState(arrayCopy, i, smallestValue);



        }

        setResultStates(newResultStates);

    }

    function insertionSort(): void {
        const arrayCopy = [...resultStates[0].numberArray];

        let j;

        for (let i = 1; i < arrayCopy.length; i++) {

            j = i
            storeResultState(arrayCopy, j, j - 1);
            while (j > 0 && arrayCopy[j - 1] > arrayCopy[j]) {
                swap(arrayCopy, j, j - 1)
                storeResultState(arrayCopy, j, j - 1);
                j -= 1
                if (j > 0) {

                    storeResultState(arrayCopy, j, j - 1);
                }

            }


        }
    }

    function partition(array: number[], l: number, r: number) {
        const pivotIndex = l;
        const pivot = array[l]
        const arrayLength = r;
        const startingIndex = l;
        while (true) {
            while (++l && l < arrayLength) {
                let swapIndexFound = false;
                if (array[l] > pivot) {
                    swapIndexFound = true;

                }
                if (r === arrayLength) {

                    storeResultState(array, pivotIndex, l, r - 1)
                } else {
                    storeResultState(array, pivotIndex, l, r)
                }
                if (swapIndexFound) {
                    break;
                }
            }
            while (--r && r > startingIndex) {
                let swapIndexFound = false;
                if (array[r] < pivot) {
                    swapIndexFound = true;

                }
                storeResultState(array, pivotIndex, r, l);
                if (swapIndexFound) {
                    break;
                }
            }
            if (l >= r) break;
            swap(array, l, r);
            storeResultState(array, pivotIndex, r, l);

        }
        swap(array, pivotIndex, r);
        storeResultState(array, pivotIndex, r, l);

        return r;
    }

    function swap(array: number[], i: number, j: number) {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp;

    }

    function quickSort(array: number[], l: number, r: number) {

        if (l < r) {
            const i = partition(array, l, r);
            quickSort(array, i + 1, r);
            quickSort(array, l, i );


        }
    }

    function mergeSort(array: number[]) {

        const n: number = array.length;

        for (let currSize = 1; currSize < n; currSize *= 2) {

            for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {

                const mid = Math.min(leftStart + currSize - 1, n - 1);
                const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

                merge(array, leftStart, mid, rightEnd);
            }
        }

        return array;


    }

    function merge(arr: number[] , l: number , m: number , r: number) {
        let i, j, k;
        const n1: number = m - l + 1;
        const n2: number = r - m;

        /* create temp arrays */
        const L: number[] = Array(n1).fill(0);
        const R: number[] = Array(n2).fill(0);

        /*
         * Copy data to temp arrays L and R
         */
        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        /*
         * Merge the temp arrays back into arr[l..r]
         */
        i = 0;
        j = 0;
        k = l;
        while (i < n1 && j < n2) {
            storeResultState(arr, l + i, m + 1 + j);
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                storeResultState(arr, k, m + 1 + j);

                i++;
            } else {

                arr[k] = R[j];
                storeResultState(arr, k, m + 1 + j);

                j++;
            }
            k++;
        }

        /*
         * Copy the remaining elements of L, if there are any
         */
        while (i < n1) {
            arr[k] = L[i];
            storeResultState(arr, l + i, m + 1 + j);
            i++;
            k++;
        }

        /*
         * Copy the remaining elements of R, if there are any
         */
        while (j < n2) {
            arr[k] = R[j];
            storeResultState(arr, l + i, m + 1 + j);
            j++;
            k++;
        }


    }

    function heapSort(array: number[]) {
        heapify(array);
        let n = array.length;

        while (n > 0) {
            swap(array, 0, n - 1);
            n -= 1;
            downHeap(array, 0, n);
        }
        storeResultState(array);



    }

    function heapify(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
            downHeap(array, i, array.length);
        }
    }

    function downHeap(array: number[], i: number, n: number) {
        let j: number;
        while (i < Math.floor(n / 2)) {
            j = (2 * i) + 1

            if (j + 1 < n && array[j] < array[j + 1]) {
                j += 1
            }
            if (j + 1 < n) {
                storeResultState(array, j, j + 1);
            }
            storeResultState(array, i, j)
            if (array[i] < array[j]) {
                swap(array, i, j);
                storeResultState(array, i, j);
                i = j;
            } else {
                break;
            }

        }

    }


    function storeResultState(arrayCopy: number[], ...comparedNumbers: number[]) {
        arrayCopy = [...arrayCopy]
        const newResultState = {
            comparedNumbers: comparedNumbers,
            numberArray: arrayCopy
        }
        setResultStates(resultStates => [...resultStates, newResultState])
    }

    function increaseCount() {
        if (count >= resultStates.length) {
            setCount(0);
            return
        }
        setCount(count => count + 1)
    }
    function decreaseCount() {
        if (count <= 0) {
            setCount(resultStates.length - 1);
            return
        }
        setCount(count => count - 1)
    }



    function chooseSort(sortingMethod : SortMethods) {

        if (sortingMethod === SortMethods.SELECTION_SORT) {

            selectionSort();
        }
        if (sortingMethod === SortMethods.INSERTION_SORT) {
            insertionSort()
        }

        if (sortingMethod === SortMethods.QUICK_SORT) {

            quickSort([...resultStates[0].numberArray], 0, resultStates[0].numberArray.length - 1);
        }

        if (sortingMethod === SortMethods.MERGE_SORT) {

            console.log(mergeSort([...resultStates[0].numberArray]));
        }

        if (sortingMethod === SortMethods.HEAP_SORT) {
            heapSort([...resultStates[0].numberArray]);
        }
    }


    const contextData: ArraySort = {
        generateArray,
        selectionSort,
        resultStates,
        initialNumberArray,
        count,
        setCount,
        chooseSort,
        increaseCount,
        decreaseCount,
        pause,
        setPause,
        isSorting,
        setIsSorting


    }

    return (

        <ArraySortContext.Provider value={contextData}>
            {children}
        </ArraySortContext.Provider>
    )
}
