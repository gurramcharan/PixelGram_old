import React, {useContext, useEffect} from 'react'
import logo from "../../imgs/pixelgram-logo.png"
// import { PostContext } from '../../Contexts/PostContext'
import {UserContext} from "../../Contexts/UserContext"
import "./UpperNav.css"
import {BiSearch} from "react-icons/bi"
import {FiLogOut} from "react-icons/fi"
import {AuthContext} from '../../Contexts/AuthContext'
import {Link} from 'react-router-dom'

export const UpperNav = () => {
    // const {postState} = useContext(PostContext)
    const {Logout} = useContext(AuthContext)
    const {HandleSearch, setSearch, search} = useContext(UserContext)

    // const handleSearchInput = (e) => {   setSearch(e.target.value);
    // HandleSearch(); }

    useEffect(() => {
        HandleSearch();
    }, [search]);

    return (
        <div className='uppernav-main-container'>
            <div className='uppernav-logo-container'>
                <img src={logo} alt="Logo" width="60rem"/>
                <p>PixelGram</p>
            </div>
            <div className='uppernav-search-main-container'>
                <div className='uppernav-search-container'>
                    <input
                        onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                        type="text"
                        name="search"
                        id="search"
                        placeholder='Search Users...'/>
                    <BiSearch className='uppernav-search-icon'/>
                </div>
                <Link onClick={() => Logout()}><FiLogOut className='uppernav-logout-btn'/></Link>
            </div>
        </div>
    )
}
