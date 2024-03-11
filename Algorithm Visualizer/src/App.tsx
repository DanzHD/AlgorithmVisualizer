import "./Styles/_index.scss"
import "./Styles/App.scss"
import SideBar from "./Components/SideBar/SideBar.tsx";
import TopBar from "./Components/TopBar/TopBar.tsx";
import AlgorithmView from "./Components/AlgorithmView/AlgorithmView.tsx";


function App() {

    return (
        <>

            <TopBar />

            <div className="main-content-section">
                <SideBar />
                <AlgorithmView />
            </div>
        </>
    )

}

export default App
