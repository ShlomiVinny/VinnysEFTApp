import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import myData from '../data.json';
import '../app.css';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state={SidebarMounted:true};
    }

    componentDidMount(){
        
        SidebarMounted=this.state.SidebarMounted;
        console.log("Sidebar Mounted:"+SidebarMounted)
    }
    
    render() {
        
        
        const sidebarItems = myData.sidebar_items;
        return (
            <div className='Sidebar' id="Sidebar">

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


