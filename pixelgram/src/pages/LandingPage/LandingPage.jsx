import React, {useContext} from 'react'
import connect from "../../imgs/connect.svg";
import logo from "../../imgs/pixelgram-logo.png";
import "./LandingPage.css"
import {Link, Navigate} from 'react-router-dom';
import {AuthContext} from '../../Contexts/AuthContext';

export const LandingPage = () => {
    const {CheckLogin} = useContext(AuthContext);

    return CheckLogin()
        ? (<Navigate to="/home"/>)
        : (
            <div className='landing-main-container'>
                <div className="landing-details-container">
                    <div className="landing-logo-container">
                        <img className='landing-logo' src={logo} alt="Logo"/>
                        <p className="landing-heading">PixelGram</p>
                    </div>
                    <div className="landing-title">
                        Share - Explore - Connect
                    </div>
                    <div className="landing-description">
                        Weaving a digital tapestry of creativity and community!
                    </div>
                    <div className="landing-btn-container">
                        <Link className='landing-signup-btn' to="/signup">Become a Member</Link>
                        <div>
                            <span>Already have an Account?
                            </span>
                            <Link className='landing-login-btn' to="/login">
                                Log In</Link>
                        </div>
                    </div>
                </div>
                <div className="landing-img-container">
                    <img className='landing-img' src={connect} alt="Connect"/>
                </div>
            </div>
        )
}
