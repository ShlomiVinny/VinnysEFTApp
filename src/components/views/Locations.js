import React, { Component } from 'react';
import Navbar from '../Navbar';
import myData from '../../data.json';
import { CreateButton } from '../Buttons';
import CommentSection from '../CommentSection';
// import logo from '../../resources/V_logo.png';


class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = { Locations: myData.Locations, LocationsContent: myData.LocationsContent, map: this.props.match.params.map };
    }
    render() {
        if (!this.state.map) {
            return (
                <div className="App with-navbar">
                    <div className="App-top">
                        <Navbar />
                    </div>
                    <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.LocationsContent.bgImage + ')' }}>
                        <div className='App-header'>{this.state.LocationsContent.header}</div>
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
            switch (this.state.map) {
                default: return null;
                case "Interchange": return (
                    <div className="App with-navbar">
                        <div className="App-top">
                            <Navbar />
                        </div>
                        <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.Locations.Interchange.mapUrl + ')' }}>
                            <div className='App-header'>{this.state.Locations.Interchange.header}</div>
                            <div className="App-content2 min-height60">
                                {this.state.Locations.Interchange.content}
                            </div>
                            <div className="App-content min-height23">
                                {this.state.Locations.Interchange.specificGuides}
                            </div>
                            <div className="App-content2 min-height60">
                                <div className="App-comments-header">Comments</div>
                                <CommentSection location={this.state.map}></CommentSection>
                            </div>
                        </div>
                    </div>
                );
                case "Customs": return (
                    <div className="App with-navbar">
                        <div className="App-top">
                            <Navbar />
                        </div>
                        <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.Locations.Customs.mapUrl + ')' }}>
                            <div className='App-header'>{this.state.Locations.Customs.header}</div>
                            <div className="App-content2 min-height60">
                                {this.state.Locations.Customs.content}
                            </div>
                            <div className="App-content min-height23">
                                {this.state.Locations.Customs.specificGuides}
                            </div>
                        </div>
                    </div>
                );
                case "Woods": return (
                    <div className="App with-navbar">
                        <div className="App-top">
                            <Navbar />
                        </div>
                        <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.Locations.Woods.mapUrl + ')' }}>
                            <div className='App-header'>{this.state.Locations.Woods.header}</div>
                            <div className="App-content2 min-height60">
                                {this.state.Locations.Woods.content}
                            </div>
                            <div className="App-content min-height23">
                                {this.state.Locations.Woods.specificGuides}
                            </div>
                        </div>
                    </div>
                );
                case "Factory": return (
                    <div className="App with-navbar">
                        <div className="App-top">
                            <Navbar />
                        </div>
                        <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.Locations.Factory.mapUrl + ')' }}>
                            <div className='App-header'>{this.state.Locations.Factory.header}</div>
                            <div className="App-content2 min-height60">
                                {this.state.Locations.Factory.content}
                            </div>
                            <div className="App-content min-height23">
                                {this.state.Locations.Factory.specificGuides}
                            </div>
                        </div>
                    </div>
                );
                case "Shoreline": return (
                    <div className="App with-navbar">
                        <div className="App-top">
                            <Navbar />
                        </div>
                        <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.Locations.Shoreline.mapUrl + ')' }}>
                            <div className='App-header'>{this.state.Locations.Shoreline.header}</div>
                            <div className="App-content2 min-height60">
                                {this.state.Locations.Shoreline.content}
                            </div>
                            <div className="App-content min-height23">
                                {this.state.Locations.Shoreline.specificGuides}
                            </div>
                        </div>
                    </div>
                );
                case "Lab": return (
                    <div className="App with-navbar">
                        <div className="App-top">
                            <Navbar />
                        </div>
                        <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.Locations.Lab.mapUrl + ')' }}>
                            <div className='App-header'>{this.state.Locations.Lab.header}</div>
                            <div className="App-content2 min-height60">
                                {this.state.Locations.Lab.content}
                            </div>
                            <div className="App-content min-height23">
                                {this.state.Locations.Lab.specificGuides}
                            </div>
                        </div>
                    </div>
                );
            }
        }

    }
}


export default Locations;