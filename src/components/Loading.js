import React, {Component} from 'react';
import loadingbg from '../resources/images/loadingbg.png';
import loadingbgLight from '../resources/images/loadingbg-light.png';

class Loading extends Component {

    render(){
        return(
            <div className='loading' id='loading'>
            <img src={loadingbgLight} alt='loadingbg-light' id='loadingbg-light'></img>
            <img src={loadingbg} alt='loadingbg' id='loadingbg'></img>
            
            
            
            </div>
        )
    }

}

export default Loading;