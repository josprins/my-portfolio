import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Pulse from 'react-reveal/Pulse';
import { Link } from 'react-router-dom'

const WelcomePage = () => {

    return (
        <div className="welcome-div">
            <h1 className="welcome-text">
                <LightSpeed left delay={500}>
                    Welcome 
                </LightSpeed>
                <br/>
                <LightSpeed right delay={1500}>
                    to my
                </LightSpeed>
                <br/>
                <LightSpeed left delay={2000}>
                    Portfolio
                </LightSpeed>
                <br/>
                <LightSpeed right delay={2500}>
                    Website
                </LightSpeed>
            </h1>
            <Pulse delay={3500} count={3} duration={1250}>
                <div>
                    <Link to="/home" className="welcome-btn">Continue</Link>
                </div>
            </Pulse>
        </div>
    );
};


export default WelcomePage;