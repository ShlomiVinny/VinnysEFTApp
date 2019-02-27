import React, { Component } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SidebarButton from '../Buttons.js';
import myData from '../../data.json';
// import logo from '../../resources/V_logo.png';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { MainContent: myData.MainContent };
    }
    render(){
        return(
    <div className="App with-navbar">
    <Sidebar />
    <SidebarButton />
    <div className="App-top">
        <Navbar />
    </div>
    <div className='App-content-wrapper top-12vh' style={{ backgroundImage: 'url(' + this.state.MainContent.bgImage + ')' }}>
        <div className='App-header'>{this.state.MainContent.header}</div>
        <div className='App-content min-height60'>{this.state.MainContent.content}</div>
        <div className='App-content2 min-height28'>{this.state.MainContent.content2}</div>
    </div>
</div>
        )
    }
}

export default Home;