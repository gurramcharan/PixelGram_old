import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import "./SideNav.css"
import {AuthContext} from "../../Contexts/AuthContext"

export const SideNav = () => {
    const {active_user} = useContext(AuthContext)
    return (
        <div className='sidenav-main-container'>
            <div className="sidenav-navlink-container">
                <NavLink className="sidenav-navlink" to="/home">Home</NavLink>
                <NavLink className="sidenav-navlink" to="/explore">Explore</NavLink>
                <NavLink className="sidenav-navlink" to="/bookmarks">Bookmarks</NavLink>
            </div>
            <div className="sidenav-profile-container">
                <NavLink className="sidenav-profile" to="/userprofile">
                    <img className='sidenav-profile-pic' src={active_user.avatar} alt=""/>
                    <div className='sidenav-profile-details-container'>
                        <p className='sidenav-profile-firstname'>{active_user.firstName}</p>
                        <p className='sidenav-profile-username'>@{active_user.username}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
