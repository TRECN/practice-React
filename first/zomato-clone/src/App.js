import React from 'react'
import { BrowserRouter as Router, Switch} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'

import Tabs from './Components/Tabs/Tabs'

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Tabs/>
                <Switch>
                    
                </Switch>

            </Router>

        </div>
    )
}

export default App
