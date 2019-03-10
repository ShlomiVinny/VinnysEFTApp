import React, { Component } from 'react';
import myData from '../../data.json';
import { LoginMagic } from '../Buttons';
import { CreateButton } from '../Buttons';



class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { WelcomeContent: myData.Content.WelcomeContent, users: myData.Users };
    }

    // componentDidMount(){
    //     fetch('https://api.mydomain.com')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
    // }

    render(){
        const content = this.state.WelcomeContent;
        const users = this.state.users;
        return(
            <div className="App with-navbar">
            <div className="App-top">
                
            </div>
            <div className='App-content-wrapper top-12vh' style={{ backgroundImage: 'url(' + content.bgImage + ')' }}>
                <div className="App-header">
                    {content.header}
                </div>

                <div className='App-content2 min-height60'>
                    <LoginMagic isRegistered={users[0].isRegistered} isLoggedIn={false}></LoginMagic>
                    {content.content}
                </div>

                <div className='App-content min-height23'>
                    {content.content2}
                    <CreateButton type='genericLink' which="Home">Enter!</CreateButton>
                </div>
            </div>
        </div>
        )
    }
}

export default Welcome;