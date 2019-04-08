import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import myData from '../data.json';
import '../app.css';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state={
            SidebarMounted : false,
            sidebarItems : myData.General.sidebar_items,
            
        };
    }

    componentDidMount(){
    this.setState({SidebarMounted : true})
        console.log("Sidebar Mounted")
        SidebarMounted = this.state.SidebarMounted.valueOf;
    }
    
    render() {
        
        
        const sidebarItems = this.state.sidebarItems;
        return (
            <div className='Sidebar' ref="Sidebar" style={this.props.style}>

                {sidebarItems.map((item, key) => {
                    let menuItems = item.menu_items;
                    return (
                        <div key={key} className="Sidebar-item">

                            <Link className="Sidebar-item-link" to={item.path}>
                                <span className='Sidebar-item-span'>
                                {item.name}
                                </span>
                            </Link>
                            {menuItems.map((item, key) => {
                                return (
                                    <Link to={item.path} className="Sidebar-inner-item" key={key}>
                                        {item.name}
                                    </Link>
                                )
                            })}

                        </div>
                    )
                })}

            </div>
        )
    }
}

export let SidebarMounted;
export default Sidebar;


