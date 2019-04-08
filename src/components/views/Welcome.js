import React, { Component } from 'react';
import Loading from '../Loading';
import { CreateButton } from '../Buttons';
import Registration from '../Registration';



class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null, loading: true };
    }

    componentDidMount() {
        fetch('http://localhost:3001/')
            .then(res => res.json())
            .then(response => {
                console.log('data recieved: ');
                console.dir(response);
                // waitXsecs method: (timeInSec: Number, callback: Function)
                this.waitXsecs(3, () => { this.setState({ data: response, loading: false }); })
            })
            .catch(error => console.error('Error:', error));

    }

    //this method recieves these params (timeInSec: Number || String, callback: Function)
    waitXsecs(timeInSec, callback) {
        return (
            setTimeout(() => {
                callback(callback)
            }, timeInSec * 1000)
        )
    }

    renderWithData(data) {


        switch (data) {
            default: return alert('default case fired in renderWithData');
            case 'loadingData': return (
                
                    <Loading />
                
            )

            case 'welcomeData':
                const content = this.state.data.Content.WelcomeContent;
                return (
                    <div className="App with-navbar">
                        <div className="App-top">
                        </div>
                        <div className='App-content-wrapper top-12vh' style={{ backgroundImage: 'url(' + content.bgImage + ')' }}>
                            <div className="App-header">
                                {content.header}
                            </div>

                            <div className='App-content2 min-height60'>
                            {content.content}

                                <Registration />
                                
                            </div>

                            <div className='App-content min-height23'>
                                {content.content2}
                                <CreateButton type='genericLink' which="Home">Enter!</CreateButton>
                                <CreateButton type='genericLink' which='Loading'>Loading screen</CreateButton>
                            </div>
                        </div>
                    </div>
                )
        }
    }

    render() {

        return (
            (this.state.loading) ? this.renderWithData('loadingData') : this.renderWithData('welcomeData')

        )
    }
}

export default Welcome;