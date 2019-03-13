import React, { Component } from 'react';
import Navbar from '../Navbar';
import SidebarButton from '../Buttons.js';
import myData from '../../data.json';
// import logo from '../../resources/V_logo.png';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { MainContent: myData.Content.MainContent };
    }

    // componentDidMount(){
    //     fetch('https://api.mydomain.com')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
    // }

    render(){
        const MainContent = this.state.MainContent;
        return(
    <div className="App with-navbar">
    
    <SidebarButton />
    <div className="App-top">
        <Navbar />
    </div>
    <div className='App-content-wrapper top-12vh' style={{ backgroundImage: 'url(' + MainContent.bgImage + ')' }}>
        <div className='App-header'>{MainContent.header}</div>
        <div className='App-content min-height60'>{MainContent.content}</div>
        <div className='App-content2 min-height28'>{MainContent.content2}</div>
    </div>
</div>
        )
    }
}

export default Home;