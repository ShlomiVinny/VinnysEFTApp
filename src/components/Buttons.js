import React, { Component } from 'react';
import Sidebar, { SidebarMounted } from './Sidebar';
import { Link } from 'react-router-dom';
import '../app.css';



// ******************************************************* Buttons class **********************************************************


//   Notes: for <Link> pass a 'genericLink' type prop, 'which' prop and an onClick prop.
//          for <button> pass a  'genericButton' type prop, 'buttonText' prop and an onClick prop as well.
//          for <map-Link> pass a 'mapLink' type prop and a 'which' prop.

export function CreateButton(props) {
    switch (props.type) {
        default: return null;
        case "mapLink": return (
            <Link className={'map-Link-' + props.which} to={"/Locations/" + props.which}>
                <div style={{ width: 1 + 'em', height: 1 + 'em', display: 'inline-block' }}></div>
            </Link>
        );
        case "genericLink": return (
            <Link className={props.which + '-button Generic-button'} to={"/" + props.which} onClick={props.onClick}>{props.which}</Link>
        );
        case "genericButton": return (
            <button className={props.which + '-button Generic-button'} onClick={props.onClick}>{props.buttonText}</button>
        );
        case "sidebar": return (
            <button className='Sidebar-button' onClick={props.onClick}>{props.buttonText}</button>
        );
    }
}

export class LoginMagic extends Component {
    constructor(props) {
        super(props);
        this.loginMagic = this.loginMagic.bind(this);
        this.state = { displayLogin: null, displayRegistration: null };
    }

    loginMagic() {
        const isReg = this.props.isRegistered;
        const isLog = this.props.isLoggedIn;
        console.log("isReg: ", isReg, "isLog: ", isLog)
        if (!isReg && !isLog) {
            this.setState({ displayLogin: false, displayRegistration: true })
        } else if (isReg && !isLog) {
            this.setState({ displayLogin: true, displayRegistration: false })
        } else if (isReg && isLog) {
            this.setState({ displayLogin: false, displayRegistration: false })
        }
    }

    logoutUser() {
        console.log("User requested logout!")
    }

    render() {
        const displayLogin = this.state.displayLogin;
        const displayRegistration = this.state.displayRegistration;
        let button;

        if (displayLogin && !displayRegistration) {

            button = <CreateButton type="genericLink" which="Login" onClick={this.loginMagic} />;
        } else if (displayRegistration && !displayLogin) {
            button = <CreateButton type="genericLink" which="Register" onClick={this.loginMagic} />;
        } else if (!displayLogin && !displayRegistration) {
            button = <CreateButton type="genericButton" which="Logout" onClick={this.logoutUser} />;
        }

        return (
            <div className="button-wrapper">
                {button}
            </div>
        )
    }
}

//*************************************************** end of LoginMagic class *********************************************************

// **************************************************** SidebarControl class **********************************************************




class SidebarButton extends Component {
    constructor(props) {
        super(props);
        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
        this.state = {
            menuDisplayed: false,
            style:{},
        };
    }

    // animation: SidebarSlide 1s linear 0s 1 forwards normal paused; <<<----NORMAL STATE

    closeSidebar() {
        if(SidebarMounted){
        this.setState({ menuDisplayed: false })
        console.log("Close sidebar!")
        this.setState({style: { animation: 'SidebarSlideOut 0.5s linear 0s 1 forwards normal running' }})
        }
    }

    openSidebar() {

        this.setState({ menuDisplayed: true })
        console.log("Open sidebar!")
        this.setState({style: { animation: 'SidebarSlideIn 0.5s linear 0s 1 forwards normal running' }})
        
    }

    render() {
        const menuDisplayed = this.state.menuDisplayed;
        let button;
        if (menuDisplayed) {
            button = <CreateButton type="sidebar" buttonText="X" onClick={this.closeSidebar} />
        } else {
            button = <CreateButton type="sidebar" buttonText="|||" onClick={this.openSidebar} />
        }

        return (
            <div className="sidebar-button-wrapper">
                {button}
               <Sidebar style={this.state.style}/>
            </div>
        )
    }

    // componentDidUpdate(){
    //     const menuDisplayed = this.state.menuDisplayed;

    //     if (menuDisplayed) {
    //         this.setState({button : <CreateButton type="sidebar" buttonText="X" onClick={this.closeSidebar} />})
    //     } else {
    //         this.setState({button : <CreateButton type="sidebar" buttonText="|||" onClick={this.openSidebar} />})
    //     }

    //     return (
    //         <div className="sidebar-button-wrapper">
    //             {this.state.button}

    //             <Sidebar style={this.state.sidebarStyle}></Sidebar>
    //         </div>
    //     )
    // }
}



export default SidebarButton;