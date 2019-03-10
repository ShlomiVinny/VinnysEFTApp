import React, { Component } from 'react';
import { LoginMagic } from '../Buttons';
import { CreateButton } from '../Buttons';



class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        fetch('/')
      .then(res => res.json())
      .then(data => this.setState({data}));
    }

    render(){
        const content = this.state.data.Content.WelcomeContent;
        const users = this.state.data.Users;
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