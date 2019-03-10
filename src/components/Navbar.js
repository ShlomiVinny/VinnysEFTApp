import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LoginMagic } from './Buttons';
import myData from '../data.json';



class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { data:myData.General.navbar_items};
    }

    // componentDidMount(){
    //     fetch('https://api.mydomain.com')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
    // }
    render() {
        var navbarItems = this.state.data;
        return (
            <div className='Navbar'>
                {navbarItems.map((item, key) => {
                    if (item.type === "Link") {
                        return (
                            <Link className="Navbar-item" to={item.path} key={key}>{item.name}</Link>
                        )
                    } else {
                        return (
                            <a className="Navbar-item" href={item.path} target="blank" key={key}>{item.name}</a>
                        )
                    }
                })}
                <LoginMagic isRegistered={true} isLoggedIn={true}></LoginMagic>
            </div>
        )
    }
}

export default Navbar;
