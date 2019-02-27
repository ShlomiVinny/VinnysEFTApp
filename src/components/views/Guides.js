import React, { Component } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import SidebarButton from '../Buttons.js';
import myData from '../../data.json';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state={ GuidesContent: myData.GuidesContent };
}
  render() {
    return (
      <div className="App with-navbar">
                    <Sidebar />
                    <SidebarButton />
                    <div className="App-top">
                        <Navbar />
                    </div>
                    <div className='App-content-wrapper top-12vh' style={{ backgroundImage: 'url(' + this.state.GuidesContent.bgImage + ')' }}>
                        <div className='App-header'>{this.state.GuidesContent.header}</div>
                        <div className='App-content min-height60'>{this.state.GuidesContent.content}</div>
                        <div className='App-content2 min-height28'>{this.state.GuidesContent.content2}</div>
                    </div>
                </div>
    )
  }
}



export default Guides;
