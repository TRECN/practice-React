import React from 'react'
import { BrowserRouter } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Tabs from './Components/Tabs/Tabs'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Tabs/>
            </BrowserRouter>

        </div>
    )
}

export default App
