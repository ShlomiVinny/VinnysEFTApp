import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import logo from '../../resources/V_logo.png';
import SidebarButton, { LoginMagic, CreateButton } from '../Buttons';
import CommentSection from '../CommentSection';
import Twitter from '../Twitter';
import myData from '../../data.json';
import '../../app.css';





class Views extends Component {
    constructor(props) {
        super(props);
        this.state = { myData: myData, AboutContent: myData.AboutContent, Locations: myData.Locations, LocationsContent: myData.LocationsContent, WelcomeContent: myData.WelcomeContent, MainContent: myData.MainContent, GuidesContent: myData.GuidesContent, LoginRegContent: myData.LoginRegContent, users: myData.Users };
    }

    render() {
        switch (this.props.which) {
            default: return;
            case "Home": return (
                <div className="App with-navbar">
                    <Twitter />
                    <Sidebar />
                    <SidebarButton />
                    
                    <div className="App-top">
                        <Navbar />
                    </div>

                    <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.MainContent.bgImage + ')' }}>
                        <div className='App-header'>{this.state.MainContent.header}</div>
                        <div className='App-content min-height60'>
                            {this.state.MainContent.content}

                        </div>
                        <div className='App-content2 min-height23'>{this.state.MainContent.content2}</div>
                    </div>
                </div>
            );

            case "Guides": return (
                <div className="App with-navbar">
                    <Sidebar />
                    <SidebarButton />
                    <div className="App-top">
                        <Navbar />
                    </div>
                    <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.GuidesContent.bgImage + ')' }}>
                        <div className='App-header'>{this.state.GuidesContent.header}</div>
                        <div className='App-content min-height60'>{this.state.GuidesContent.content}</div>
                        <div className='App-content2 min-height23'>{this.state.GuidesContent.content2}</div>
                    </div>
                </div>
            );

            case "LoginReg": return (
                <div className="App">
                    <Sidebar />
                    <SidebarButton />
                    <div className="App-top">
                        <Navbar />
                    </div>
                    <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.LoginRegContent.bgImage + ')' }}>
                        <div className='App-header'>{this.state.LoginRegContent.header}</div>
                        <div className='App-content min-height60'>{this.state.LoginRegContent.content}</div>
                        <div className='App-content2 min-height23'>{this.state.LoginRegContent.content2}</div>
                    </div>
                </div>
            );

            case "Welcome": return (
                <div className="App">
                    <div className="App-top">
                        <img src={logo} className='App-logo' alt='logo'></img>
                    </div>
                    <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.WelcomeContent.bgImage + ')' }}>
                        <div className="App-header">
                            {this.state.WelcomeContent.header}
                        </div>

                        <div className='App-content2 min-height60'>
                            <LoginMagic isRegistered={this.state.users.user1.isRegistered} isLoggedIn={false}></LoginMagic>
                            {this.state.WelcomeContent.content}
                        </div>

                        <div className='App-content min-height23'>
                            {this.state.WelcomeContent.content2}
                            <Link className='Generic-button' to="/Home">Enter!</Link>
                        </div>
                    </div>
                </div>
            );

            case "Locations":
                if (!this.props.map) {
                    return (
                        <div className="App with-navbar">
                            <div className="App-top">
                                <Navbar />
                            </div>
                            <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.LocationsContent.bgImage + ')' }}>
                                <div className='App-header'>{this.state.LocationsContent.header}</div>
                                <div id="locations">
                                    {/* <img id="main-map" src={mainMap} alt="map"></img> */}
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
                    switch (this.props.map) {
                        default: return null;
                        case "Interchange": return (
                            <div className="App">
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
                                        <CommentSection location={this.props.map}></CommentSection>
                                    </div>
                                </div>
                            </div>
                        );
                        case "Customs": return (
                            <div className="App">
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
                            <div className="App">
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
                            <div className="App">
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
                            <div className="App">
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
                            <div className="App">
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
            case "About": return (
                <div className="App">
                    <div className="App-top">
                        <Navbar />
                    </div>
                    <div className='App-content-wrapper' style={{ backgroundImage: 'url(' + this.state.AboutContent.bgImage + ')' }}>
                        <div className="App-header">
                            {this.state.AboutContent.header}
                        </div>

                        <div className='App-content2 min-height60'>
                            {this.state.AboutContent.content}
                        </div>

                        <div className='App-content min-height23'>
                            {this.state.AboutContent.content2}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Views;

export class Welcome extends Component { render() { return (<Views which="Welcome"></Views>) } };
export class Home extends Component { render() { return (<Views which="Home"></Views>) } };
export class Guides extends Component { render() { return (<Views which="Guides"></Views>) } };
export class Login extends Component { render() { return (<Views which="LoginReg"></Views>) } };
export class About extends Component { render() { return (<Views which="About"></Views>) } };
export class Locations extends Component { render() { return (<Views which="Locations" map={this.props.match.params.map}></Views>) } };

