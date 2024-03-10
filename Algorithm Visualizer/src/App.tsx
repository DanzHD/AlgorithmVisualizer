import "./Styles/_index.scss"
import Text from "./Components/Text/Text.tsx";
import {useThemeContext} from "./Context/ThemeContext/useThemeContext.tsx";
import {themes} from "./Context/ThemeContext/themesEnum.tsx";
import "./Styles/App.scss"


function App() {
    const {theme, handleToggleTheme} = useThemeContext();

    return (
        <>
            <Text>Hello world</Text>
            {
                theme === themes.light ?
                    <span onClick={handleToggleTheme} className="material-symbols-outlined light">
                        dark_mode
                    </span> :
                    <span onClick={handleToggleTheme} className="material-symbols-outlined dark">
                        light_mode
                    </span>
            }
        </>
    )

}

export default App
