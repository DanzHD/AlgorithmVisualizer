import "./_sidebar.scss"
import cx from 'classnames';
import {useState} from "react";

export default function SideBar() {
    const [expanded, setExpanded] = useState(false);

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
                </div>
            </div>
        </>
    )
}