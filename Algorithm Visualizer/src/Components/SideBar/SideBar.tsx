import "./_sidebar.scss"
import cx from 'classnames';
import {ChangeEventHandler, useEffect, useRef, useState} from "react";
import useArraySortContext from "../../Context/ArraySortContext/useArraySortContext.tsx";
import Button from "../Button/Button.tsx";
import Text from "../Text/Text.tsx";
import {INITIAL_ARRAY_SIZE} from "../../Utils/Constants.tsx";
import {SortMethods} from "../../Utils/enum.tsx";

export default function SideBar() {
    const [expanded, setExpanded] = useState(false);
    const {generateArray, chooseSort} = useArraySortContext();
    const sortMethodRef = useRef(null);
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

    const handleSizeChange = (e: ChangeEventHandler<HTMLInputElement>) => {
        if (!e.target) return
        setArraySize(e.target.value);
        generateArray(e.target.value);

    }

    const handleSortArray = () => {
        chooseSort(sortMethodRef.current.options[sortMethodRef.current.options.selectedIndex].value)
    }


    return (
        <>
            <div className={computedSideBarContainerClasses}>

                <div className="side-bar">
                    <div onClick={() => setExpanded(expanded => !expanded)} className={computedMenuClasses}>
                        menu
                    </div>
                    <div className={cx("sort-options", {"invisible": !expanded})}>


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

                        <Button fullWidth onClick={() => generateArray(arraySize)} className={cx(
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
                        >
                            Sort Array!
                        </Button>


                    </div>
                </div>
            </div>
        </>
    )
}