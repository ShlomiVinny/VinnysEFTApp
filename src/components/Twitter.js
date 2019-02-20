import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets'


class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="App-twitter-timeline">
            <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'bstategames'
    }}
    options={{
      theme: 'dark',
      height: '600'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
            </div>
        )
    }
}

export default Twitter;




