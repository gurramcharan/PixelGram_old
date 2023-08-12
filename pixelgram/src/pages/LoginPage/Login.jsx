import React,{useState,useContext} from 'react'
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import "./Login.css"
import login from "../../imgs/login.svg"
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"

export const Login = () => {
  const testUserData = {
    username: "gurramcharan",
    password: "123",
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

  const { Login } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const handleLogin = () => {
    if (!userData.username.trim() || !userData.password.trim()) {
      toast.warn("Enter all Credentials!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      Login(userData);
    }
  };

  const handleTestUserLogin = () => {
    setUserData(testUserData);
    Login(testUserData);
  };

  return (
    <div className='login-main-container'>
      <div className='login-sub-container'>
      <div className="login-img-container">
        <img className='login-img' src={login} alt="Login image" />
      </div>
      <div className="login-details-container">
        <div className='login-details-heading'>Log In</div>
        <div className='login-username-container'>
          <label htmlFor="username">Username:</label>
        <input
              className="auth-input"
              type="login"
              id="username"
              placeholder="Enter your Username"
              value={userData.username}
              onChange={(e) =>
                setUserData((prevs) => ({ ...prevs, username: e.target.value }))
              }
            />
        </div>
        <div className="login-password-container">
          <label htmlFor="password">Password:</label>
          <div>
            <div className="login-password-toggle-btn-container">
        <input
              className="auth-input"
              type={passwordType}
              id="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={(e) =>
                setUserData((prevs) => ({ ...prevs, password: e.target.value }))
              }
            />
          <button className='login-password-toggle-btn' onClick={togglePassword}>{passwordType === "password" ? <AiFillEyeInvisible  /> : <AiFillEye />}</button>
          </div>
          </div>
        </div>
        <div className="login-btn-container">
          <button className="auth-btn" onClick={() => handleLogin()}>
          Login
          </button>
          <button className="auth-btn" onClick={() => handleTestUserLogin()}>
          Test Login
          </button>
        </div>
        <div>
        <span>Don't have an Account? </span>
        <Link to="/signup">Register Now</Link>
        </div>
      </div>
      </div>
    </div>
  )
}
