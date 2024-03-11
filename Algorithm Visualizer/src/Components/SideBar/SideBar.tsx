import "./_sidebar.scss"
import cx from 'classnames';
import {ChangeEvent, useRef, useState} from "react";
import useArraySortContext from "../../Context/ArraySortContext/useArraySortContext.tsx";
import Button from "../Button/Button.tsx";
import Text from "../Text/Text.tsx";
import {INITIAL_ARRAY_SIZE} from "../../Utils/Constants.tsx";
import {SortMethods} from "../../Utils/enum.tsx";



export default function SideBar() {
    const [expanded, setExpanded] = useState(false);
    const {generateArray, chooseSort, setPause, increaseCount, decreaseCount,
        pause, isSorting, setIsSorting, setCount} = useArraySortContext();
    const sortMethodRef = useRef<HTMLSelectElement>(null);
    const stepByStepCheckBoxRef = useRef<HTMLInputElement>(null);
    const [arraySize, setArraySize] = useState(INITIAL_ARRAY_SIZE)
    const computedSideBarContainerClasses = cx('side-bar-container', {
        'side-bar-container--expanded': expanded
    });

    const computedMenuClasses = cx(
        'material-symbols-outlined',
        'menu',
        {
            'menu--expanded': expanded
        }
    )

    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target) return
        setArraySize(parseInt(e.target.value));
        setIsSorting(false);
        generateArray(parseInt(e.target.value));

    }

    const handleSortArray = () => {
        if (!sortMethodRef.current) return;
        if (!stepByStepCheckBoxRef.current) return
        setIsSorting(true);
        setPause(stepByStepCheckBoxRef.current.checked);

        chooseSort(parseInt(sortMethodRef.current.options[sortMethodRef.current.options.selectedIndex].value))
    }

    function handleGenerateArray() {
        setIsSorting(false);
        generateArray(arraySize);
        setCount(0);

    }


    return (
        <>
            <div className={computedSideBarContainerClasses}>

                <div className="side-bar">
                    <div onClick={() => setExpanded(expanded => !expanded)} className={computedMenuClasses}>
                        menu
                    </div>
                    <div className={cx("sort-options", {"invisible": !expanded})}>


                        <>
                            <div className="select-array-size">

                                <Text subheading>Select array size</Text>
                                <input defaultValue={INITIAL_ARRAY_SIZE} onChange={handleSizeChange} id="array-size" type="range" min="5" max="200"/>
                            </div>

                            <div className="select-sorting-method">
                                <Text subheading>Select sorting method</Text>
                                <select ref={sortMethodRef}>
                                    <option value={SortMethods.SELECTION_SORT}>Selection Sort</option>
                                </select>
                            </div>
                            <div className="step-by-step-checkbox">

                                <input ref={stepByStepCheckBoxRef} type="checkbox"/>
                                <Text>Run step-by-step?</Text>

                            </div>

                            <Button fullWidth onClick={handleGenerateArray} className={cx(
                                "generate-array",
                                {
                                    "generate-array--invisible": !expanded
                                }
                            )} >Generate New Array!</Button>

                            <Button
                                className={cx({
                                    "invisible": !expanded
                                })}
                                fullWidth
                                onClick={handleSortArray}
                                disabled={isSorting}
                            >
                                Sort Array!
                            </Button>
                        </>

                        {
                            isSorting &&
                            <>
                                <div className="step-by-step-animation">
                                    {
                                        pause ?
                                            <>
                                            <span onClick={decreaseCount} className="material-symbols-outlined">
                                                arrow_back
                                            </span>
                                                <span onClick={() => setPause(false)} className="material-symbols-outlined">
                                                play_arrow
                                            </span>
                                                <span onClick={increaseCount} className="material-symbols-outlined">
                                                navigate_next
                                            </span>
                                            </> :
                                            <span onClick={() => setPause(true)} className="material-symbols-outlined">
                                                pause
                                            </span>
                                    }
                                </div>
                            </>
                        }


                    </div>
                </div>
            </div>
        </>
    )
}