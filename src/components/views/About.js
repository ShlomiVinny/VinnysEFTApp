import React, { Component } from 'react';
import Navbar from '../Navbar';
import myData from '../../data.json';
// import logo from '../../resources/V_logo.png';



class About extends Component {
    constructor(props) {
        super(props);
        this.state = { AboutContent: myData.AboutContent };
    }
    render() {
        return (
            <div className="App with-navbar">
                <div className="App-top">
                    <Navbar />
                </div>
                <div className='App-content-wrapper top-12vh' style={{ backgroundImage: 'url(' + this.state.AboutContent.bgImage + ')' }}>
                    <div className="App-header">
                        {this.state.AboutContent.header}
                    </div>

                    <div className='App-content2 min-height60'>
                        {this.state.AboutContent.content}
                    </div>

                    <div className='App-content min-height23'>
                        {this.state.AboutContent.content2}
                    </div>
                </div>
            </div>
        )
    }
}

export default About;