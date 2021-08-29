import React from 'react'
import { Router } from 'react-router'
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
