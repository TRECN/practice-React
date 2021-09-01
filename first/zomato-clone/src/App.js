import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import  Delivery  from './Components/Delivery/Delivery'
import Tabs from './Components/Tabs/Tabs'
import DiningOut from './Components/DiningOut/DiningOut'
import Nightlife from './Components/Nightlife/Nightlife'
import Nutrition from './Components/Nutrition/Nutrition'

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <br />
                <Tabs/>
                <Switch>
                    <Route path='/' exact component={Delivery}></Route>
                    <Route path='/delivery' exact component={Delivery}></Route>
                    <Route path='/dining' component={DiningOut}></Route>
                    <Route path='/nightlife' component={Nightlife}></Route>
                    <Route path='/nutrition' component={Nutrition}></Route>
                </Switch>

            </Router>

        </div>
    )
}

export default App
