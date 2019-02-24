import React,{ Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/views/Welcome';
import Home from './components/views/Home';
import Guides from './components/views/Guides';
import Locations from './components/views/Locations';
import About from './components/views/About';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div id="App-wrapper">
                    <Route path='/' exact={true} component={Welcome}></Route>
                    <Route path='/Home' exact={true} component={Home}></Route>
                    <Route path='/Guides' exact={true} component={Guides}></Route>
                    <Route path='/Locations' exact={true} component={Locations}></Route>
                    <Route path='/Locations/:map' exact={true} component={Locations}></Route>
                    <Route path='/About' exact={true} component={About}></Route>
                </div>
            </Router >
        )
    }
}


export default Routes;



