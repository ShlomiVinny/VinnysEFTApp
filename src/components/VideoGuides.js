import React, { Component } from 'react';

class VideoGuides extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    switchByLoc() {
        switch (this.props.map) {
            default: return null;
            case 'Lab': return
            case 'Interchange': return
            case 'Factory': return [
                <iframe key='App-video-guide2' className='App-video-guide' title='factory-video-guide' width="560" height="315" src="https://www.youtube.com/embed/mfV6j1jDgIc" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>,
                <iframe key='App-video-guide1' className='App-video-guide' title='factory-video-guide' width="560" height="315" src="https://www.youtube.com/embed/Sgs3hCYFw_A" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>

            ]
            case 'Shoreline': return
            case 'Woods': return
            case 'Customs': return
        }
    }

    render() {
       return this.switchByLoc();
    }




}

export default VideoGuides;