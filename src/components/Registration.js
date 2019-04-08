import React, { Component } from 'react';
import { Redirect } from 'react-router';
import myData from '../data.json';
import { CreateButton } from './Buttons.js';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regContent: myData.Content.RegistrationContent,
            username: '',
            pw: '',
            redirect: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }


    componentDidMount() {

    }

    handleChange(event) {
        event.preventDefault();
        event.stopPropagation();
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(target.name);


    }

    register(event) {

        event.preventDefault();
        event.stopPropagation();

        let user = { username: this.state.username, pw: this.state.pw };
        myData.Users.push(user);
        console.dir(myData.Users)
        this.setState({username:'', pw:'', redirect: true})
        
    }

    login() { }

    render() {
        let content = this.state.regContent;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/Home'/>
          }else{
        return (
            <div id='App-registration'>
                <h1 className='App-header'>{content.header}</h1>
                <form name='registration-form'>
                    <fieldset id='App-registration-fieldset'>
                        <legend>Register / Log-in</legend>
                        How would you like to be called?
                        <input value={this.state.username} name='username' className='App-registration-input' type='text' placeholder='Username' onChange={this.handleChange} required></input>
                        Choose a secure, but easy to remember password!
                        <input value={this.state.pw} name='pw' className='App-registration-input' type='password' placeholder='Password' onChange={this.handleChange} required></input>

                        <div className='App-registration-buttons'>
                            <CreateButton type='genericButton' which='App-registration-register' buttonText='Register' onClick={this.register}></CreateButton>
                            <CreateButton type='genericButton' which='App-registration-Login' buttonText='Log-in' onClick={this.login}></CreateButton>
                            {/* <button className='App-registration-button' type='submit'>Register - Create a new account</button> */}
                            {/* <button className='App-registration-button' type='submit'>Log-in - Use an existing account</button> */}
                        </div>

                    </fieldset>
                </form>

            </div>
        )
          }
    }



}

export default Registration;