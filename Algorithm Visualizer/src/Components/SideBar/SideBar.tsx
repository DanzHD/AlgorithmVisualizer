import "./_sidebar.scss"
import cx from 'classnames';
import {useState} from "react";
import useArraySortContext from "../../Context/ArraySortContext/useArraySortContext.tsx";

export default function SideBar() {
    const [expanded, setExpanded] = useState(false);
    const {generateArray, chooseSort, increaseCount} = useArraySortContext();

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


    return (
        <>
            <div className={computedSideBarContainerClasses}>

                <div className="side-bar">
                    <div onClick={() => setExpanded(expanded => !expanded)} className={computedMenuClasses}>
                        menu
                    </div>
                    <div onClick={() => generateArray(200)} className={cx(
                        "generate-array",
                        {

                            "generate-array--invisible": !expanded
                        }
                    )}>
                        Generate Array
                    </div>
                    <div onClick={() => chooseSort()}>
                        sort
                    </div>
                    <div onClick={increaseCount}>Next</div>
                </div>
            </div>
        </>
    )
}