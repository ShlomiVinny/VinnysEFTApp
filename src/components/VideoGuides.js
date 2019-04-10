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
            case 'Lab': return [
                <iframe key='345regfdsx' className='App-video-guide' title='lab-video-guide' width="560" height="315" src="https://www.youtube.com/embed/CZU9jY1ddpg" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            ]
            case 'Interchange': return [
                <iframe key='345fgdffdg' className='App-video-guide' title='interchange-video-guide' width="560" height="315" src="https://www.youtube.com/embed/XPCC0e2noog" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            ]
            case 'Factory': return [
                <iframe key='App-video-guide2' className='App-video-guide' title='factory-video-guide' width="560" height="315" src="https://www.youtube.com/embed/mfV6j1jDgIc" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>,
                <iframe key='App-video-guide1' className='App-video-guide' title='factory-video-guide' width="560" height="315" src="https://www.youtube.com/embed/Sgs3hCYFw_A" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            ]
            case 'Shoreline': return [
                <iframe key='dfgdfg' className='App-video-guide' title='shoreline-video-guide' width="560" height="315" src="https://www.youtube.com/embed/D45CXH4KQ6A" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            ]
            case 'Woods': return [
                <iframe key='sdfasd' className='App-video-guide' title='woods-video-guide' width="560" height="315" src="https://www.youtube.com/embed/bVOxgsOCcjo" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            ]
            case 'Customs': return [
            <iframe key='4trt4fg' className='App-video-guide' title='customs-video-guide' width="560" height="315" src="https://www.youtube.com/embed/28vlE-QWrZU" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            ]
        }
    }

    render() {
       return this.switchByLoc();
    }




}

export default VideoGuides;