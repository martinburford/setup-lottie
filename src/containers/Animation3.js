// React imports
import React, { Component, Fragment } from 'react';

// Local project (JavaScript) imports
import Lottie from '../components/Lottie';

class Animation3 extends Component {
    render(){
        return (
            <div className="animation">
                <Lottie 
                    height={600}
                    options={{
                        animationData: require('../components/Lottie/data/fingerprint.json'),
                        loop: false
                    }}
                    width={600}
                />            
            </div>
        );
    }
}

export default Animation3;