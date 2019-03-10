import React, { Component } from 'react';
import Navbar from '../Navbar';
import myData from '../../data.json';
import { CreateButton } from '../Buttons';
import CommentSection from '../CommentSection';

// import logo from '../../resources/V_logo.png';


class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Locations: myData.Locations,
            LocationsContent: myData.Content.LocationsContent,
            map: this.props.match.params.map
        };
    }

    // componentDidMount(){
    //     fetch('https://api.mydomain.com')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
    // }

    render() {
        const LocationsContent = this.state.LocationsContent;
        var m = this.state.map;
        var l = this.state.Locations;
        if (!m) {
            return (
                <div className="App with-navbar">
                    <div className="App-top">
                        <Navbar />
                    </div>
                    <div className='App-content-wrapper top-12vh'>
                        <div className='App-header'>{LocationsContent.header}</div>
                        <div id="locations">

                            <CreateButton type="mapLink" which="Interchange" ></CreateButton>
                            <CreateButton type="mapLink" which="Customs"></CreateButton>
                            <CreateButton type="mapLink" which="Factory"></CreateButton>
                            <CreateButton type="mapLink" which="Woods"></CreateButton>
                            <CreateButton type="mapLink" which="Shoreline"></CreateButton>
                            <CreateButton type="mapLink" which="Lab"></CreateButton>
                        </div>
                    </div>
                </div>
            )
        } else {
            
            return (
                <div className="App with-navbar">
                    <div className="App-top">
                        <Navbar />
                    </div>

                    <div className='App-content-bg top-12vh'
                        style={{ backgroundImage: 'url(' + l[m].bgImage + ')' }}>
                    </div>

                    <div className='App-content-wrapper top-12vh'>
                        <div className='App-header'>{l[m].header}</div>
                        <div className="App-content2 min-height60">
                            {l[m].content}
                        </div>
                        <div className="App-content min-height23">
                            {l[m].specificGuides}
                        </div>
                        <div className="App-content2 min-height60">
                            <div className="App-comments-header">Comments</div>
                            <CommentSection location={m}></CommentSection>
                        </div>
                    </div>
                </div>
            )




        }
    }
}


export default Locations;