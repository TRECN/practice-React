import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import  Delivery  from './Components/Delivery/Delivery'

import Tabs from './Components/Tabs/Tabs'
import DiningOut from './Components/DiningOut/DiningOut'

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <br />
                <Tabs/>
                <Switch>
                    <Route path='/' exact component={Delivery}></Route>
                    <Route path='/Dining_out' component={DiningOut}></Route>
                </Switch>

            </Router>

        </div>
    )
}

export default App
