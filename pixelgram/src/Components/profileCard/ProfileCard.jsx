import React, {useContext, useState} from 'react'
import "./ProfileCard.css"
import {PostContext} from '../../Contexts/PostContext'
import {AuthContext} from '../../Contexts/AuthContext'
import {UserContext} from "../../Contexts/UserContext"
import {BiEdit} from 'react-icons/bi'

export const ProfileCard = ({profiledata}) => {
    const {postState} = useContext(PostContext)
    const {active_user, followUser, UnfollowUser, authState} = useContext(AuthContext);
    const {EditUser} = useContext(UserContext);
    const [editbio,
        setEditbio] = useState(false);
    const filteredHomePosts = postState
        .allpost
        .filter((post) => profiledata.username === post.username)

    const Isfollowing = (item) => active_user
        .following
        .find((person) => person._id === item)
        ? true
        : false;

    return (
        <div className='profilecard-main-container'>
            <div className="profilecard-avatar-details-container">
                <div className='flex-row align-items gap1'>
                    <img className='profilecard-avatar' src={profiledata.avatar}/>
                    <div className='flex-row gap1'>
                        <div className='profilecard-follow'>
                            <div>Posts</div>
                            <div>{filteredHomePosts.length}</div>
                        </div>
                        <div className='profilecard-follow'>
                            <div>Followers</div>
                            <div>{profiledata.followers.length}</div>
                        </div>
                        <div className='profilecard-follow'>
                            <div>Following</div>
                            <div>{profiledata.following.length}</div>
                        </div>
                    </div>

                </div>
                <div className='flex-row'>
                    {profiledata.username === active_user.username
                        ? (
                            <p onClick={() => setEditbio(true)} className='profiledata-edit'><BiEdit/></p>
                        )
                        : (
                            <div className='postdisplay-follow-container'>
                                <button
                                    className='postdisplay-follow'
                                    onClick={() => Isfollowing(profiledata._id)
                                    ? UnfollowUser(profiledata._id)
                                    : followUser(profiledata._id)}>{Isfollowing(profiledata._id)
                                        ? "-Unfollow"
                                        : "+Follow"}
                                </button>
                            </div>
                        )}
                </div>
            </div>
            <div className='profilecard-profile-details'>
                <div className='profilecard-username'>@{profiledata.username}</div>
                <div className="profilecard-name">{profiledata.firstName} {profiledata.lastName}</div>
                <a className='profilecard-link' href={profiledata.profile} target='/'>{profiledata.profile}</a>
                <div className='profilecard-bio'>{profiledata.bio}</div>
            </div>
            <form
                onSubmit={(e) => {
                setEditbio(false);
                EditUser(e);
            }}
                className=" profilecard-user-info"
                style={{
                display: editbio
                    ? "flex"
                    : "none"
            }}>
                <div className='flex-column'>
                    <label htmlFor="user_portfolio">Portfolio URL:</label>
                    <input
                        type="text"
                        className=" profilecard-info-input"
                        placeholder="Add your Portfolio"
                        defaultValue={authState.user.profile}
                        id="user_portfolio"/>
                </div>
                <div className='flex-column'>
                    <label htmlFor="user_bio">Bio:</label>
                    <textarea
                        defaultValue={authState.user.bio}
                        id="user_bio"
                        cols="20"
                        rows="4"
                        className='profilecard-bio-input'
                        placeholder="why not a short and sweet bio?..."/>
                </div>
                <div className='profilecard-submit-btn-container'>
                    <button
                        className="profilecard-submit-btn"
                        type="submit"
                        style={{
                        display: editbio
                            ? "block"
                            : "none"
                    }}>
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    )
}
