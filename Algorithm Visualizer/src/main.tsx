import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeContextProvider} from "./Context/ThemeContext/ThemeContext.tsx";
import {ArraySortContextProvider} from "./Context/ArraySortContext/ArraySortContext.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ArraySortContextProvider>

            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </ArraySortContextProvider>
    </React.StrictMode>,
)
