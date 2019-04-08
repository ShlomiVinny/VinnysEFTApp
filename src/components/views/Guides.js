import React, { Component } from 'react';
import Navbar from '../Navbar';

import SidebarButton from '../Buttons.js';
import myData from '../../data.json';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
       GuidesContent : myData.Content.GuidesContent
       };
  }

  // componentDidMount(){
  //     fetch('')
  //   .then(response => response.json())
  //   .then(data => this.setState({ data }));
  // }

  render() {
    const GuidesContent = this.state.GuidesContent;
    return (
      <div className="App with-navbar">
        
        <SidebarButton />
        <div className="App-top">
          <Navbar />
        </div>
        <div className='App-content-wrapper top-12vh' style={{ backgroundImage: 'url(' + GuidesContent.bgImage + ')' }}>
          <div className='App-header'>{GuidesContent.header}</div>
          <div className='App-content min-height60'>{GuidesContent.content}</div>
          <div className='App-content2 min-height28'>{GuidesContent.content2}</div>
        </div>
      </div>
    )
  }
}



export default Guides;
