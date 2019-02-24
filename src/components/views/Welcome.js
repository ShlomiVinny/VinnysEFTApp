import React, { Component } from 'react';
import myData from '../../data.json';
import { LoginMagic } from '../Buttons';
import { CreateButton } from '../Buttons';



class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { WelcomeContent: myData.WelcomeContent, users: myData.Users };
    }
    render(){
        return(
            <div className="App with-navbar">
            <div className="App-top">
                
            </div>
            <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.WelcomeContent.bgImage + ')' }}>
                <div className="App-header">
                    {this.state.WelcomeContent.header}
                </div>

                <div className='App-content2 min-height60'>
                    <LoginMagic isRegistered={this.state.users.user1.isRegistered} isLoggedIn={false}></LoginMagic>
                    {this.state.WelcomeContent.content}
                </div>

                <div className='App-content min-height23'>
                    {this.state.WelcomeContent.content2}
                    <CreateButton type='genericLink' which="Home">Enter!</CreateButton>
                </div>
            </div>
        </div>
        )
    }
}

export default Welcome;