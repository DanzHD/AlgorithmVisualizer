import "./Styles/_index.scss"
import Text from "./Components/Text/Text.tsx";
import "./Styles/App.scss"
import SideBar from "./Components/SideBar/SideBar.tsx";
import TopBar from "./Components/TopBar/TopBar.tsx";


function App() {

    return (
        <>

            <TopBar />

            <div className="main-content-section">
                <SideBar />

                <Text>Hello world</Text>
            </div>
        </>
    )

}

export default App
