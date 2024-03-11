import "./_topbar.scss"
import {themes} from "../../Context/ThemeContext/themesEnum.tsx";
import {useThemeContext} from "../../Context/ThemeContext/useThemeContext.tsx";

export default function TopBar() {
    const {theme, handleToggleTheme} = useThemeContext();


    return (
        <div className="top-bar">
            <div className="logo">
                Algorithm Visualizer
            </div>
            {
                theme === themes.light ?
                    <span onClick={handleToggleTheme} className="material-symbols-outlined light">
                            dark_mode
                        </span> :
                    <span onClick={handleToggleTheme} className="material-symbols-outlined dark">
                            light_mode
                        </span>
            }
        </div>
    )

}