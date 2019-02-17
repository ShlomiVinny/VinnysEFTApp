import React,{ Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Welcome, Home, Guides, Login, Locations, About} from './components/views/Views';




class Routes extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render() {
        return (
            <Router>
                <div id="App-wrapper">
                    <Route path='/' exact={true} component={Welcome}></Route>
                    <Route path='/Home' exact={true} component={Home}></Route>
                    <Route path='/Guides' exact={true} component={Guides}></Route>
                    <Route path='/Login' exact={true} component={Login}></Route>
                    <Route path='/Locations' exact={true} component={Locations}></Route>
                    <Route path='/Locations/:map' exact={true} component={Locations}></Route>
                    <Route path='/About' exact={true} component={About}></Route>
                </div>
            </Router >
        )
    }
}


export default Routes;



