import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Tabs from './Components/Tabs/Tabs'

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Tabs/>
            </Router>
        </>
    )
}

export default App
