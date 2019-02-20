import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {



        return (
            <div className="App-twitter-timeline">
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="bstategames"
                theme='dark'
                linkColor='#9a8866'
                options={{ height: 495}}
            />
            </div>
        )
    }
}

export default Twitter;