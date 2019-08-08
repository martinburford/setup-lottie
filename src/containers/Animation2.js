// React imports
import React, { Component, Fragment } from 'react';

// Local project (JavaScript) imports
import Lottie from '../components/Lottie';

class Animation2 extends Component {
    render(){
        return (
            <div className="animation">
                <Lottie 
                    height={600}
                    options={{
                        animationData: require('../components/Lottie/data/motorbike.json'),
                    }}
                    width={600}
                />            
            </div>
        );
    }
}

export default Animation2;