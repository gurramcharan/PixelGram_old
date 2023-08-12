import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom';
import {AuthContext} from '../../Contexts/AuthContext';
import {toast} from "react-toastify";
import signup from "../../imgs/signup.svg"
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import "./Signup.css"

export const Signup = () => {
    const {userCredentials, setUserCredentials, SignUp} = useContext(AuthContext);
    const handleSignUp = () => {
        if (!userCredentials.firstname.trim() || !userCredentials.lastname.trim() || !userCredentials.email.trim() || !userCredentials.password.trim() || !userCredentials.username.trim()) {
            toast.warn("Enter all Credentials!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        } else {
            SignUp(userCredentials);
        }
    };

    const [passwordType,
        setPasswordType] = useState("password")

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
        } else {
            setPasswordType("password")
        }
    }

    return (
        <div className="signup-main-container">
            <div className="signup-sub-container">
                <div className="signup-img-container">
                    <img className='signup-img' src={signup} alt="signup image"/>
                </div>
                <div className="signup-details-container">
                    <div className='signup-details-heading'>Sign Up</div>
                    <div className="signup-firstname-container">
                        <label htmlFor="first-name">Firstname:
                        </label>
                        <input
                            className="signup-auth-input "
                            id="first-name"
                            type="text"
                            placeholder="Enter firstname"
                            value={userCredentials.firstname}
                            onChange={(e) => setUserCredentials((prev) => ({
                            ...prev,
                            firstname: e.target.value
                        }))}/>
                    </div>
                    <div className="signup-lastname-container">
                        <label htmlFor="last-name">Lastname:
                        </label>
                        <input
                            className="signup-auth-input "
                            id="last-name"
                            type="text"
                            placeholder="Enter lastname"
                            value={userCredentials.lastname}
                            onChange={(e) => setUserCredentials((prev) => ({
                            ...prev,
                            lastname: e.target.value
                        }))}/>
                    </div>
                    <div className="signup-email-container">
                        <label htmlFor="e-mail">Email:
                        </label>
                        <input
                            className="signup-auth-input "
                            id="e-mail"
                            type="email"
                            placeholder="Enter Email"
                            value={userCredentials.email}
                            onChange={(e) => setUserCredentials((prev) => ({
                            ...prev,
                            email: e.target.value
                        }))}/>
                    </div>
                    <div className="signup-username-container">
                        <label htmlFor="username">Username:
                        </label>
                        <input
                            className="signup-auth-input "
                            id="username"
                            type="text"
                            placeholder="Enter Username"
                            value={userCredentials.username}
                            onChange={(e) => setUserCredentials((prev) => ({
                            ...prev,
                            username: e.target.value
                        }))}/>
                    </div>
                    <div className="signup-password-container">
                        <label htmlFor="password">Password:</label>
                        <div className='signup-password-toggle-btn-container'>
                            <input
                                className="signup-auth-input "
                                id="password"
                                type={passwordType}
                                placeholder="Enter password"
                                value={userCredentials.password}
                                onChange={(e) => setUserCredentials((prev) => ({
                                ...prev,
                                password: e.target.value
                            }))}/>
                            <button className='login-password-toggle-btn' onClick={togglePassword}>{passwordType === "password"
                                    ? <AiFillEyeInvisible/>
                                    : <AiFillEye/>}</button>
                        </div>

                    </div>
                    <div className="signup-btn-container">
                        <button className="signup-auth-btn" onClick={() => handleSignUp()}>
                            Sign Up
                        </button>
                    </div>
                    <div>
                        <p>
                            Already having an account?
                            <Link to="/login">Log In here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
