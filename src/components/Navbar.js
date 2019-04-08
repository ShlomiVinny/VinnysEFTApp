import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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


                    switch(item.type){
                        default: return null;
                        case 'Link': return <Link className="Navbar-item" to={item.path} key={key}>{item.name}</Link>;
                        case 'Generic': return <a className="Navbar-item" href={item.path} target="blank" key={key}>{item.name}</a>
                    }
                    
                    
                })}
                
            </div>
        )
    }
}

export default Navbar;
