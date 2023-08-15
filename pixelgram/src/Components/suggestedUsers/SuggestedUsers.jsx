import React, {useContext} from 'react'
import "./SuggestedUsers.css"
import {UserContext} from '../../Contexts/UserContext'
import {AuthContext} from '../../Contexts/AuthContext'
import { useNavigate} from 'react-router-dom'

export const SuggestedUsers = () => {
    const {filteredusers} = useContext(UserContext)
    const {active_user, followUser, UnfollowUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const suggestedUserFilter = filteredusers.filter((item) => (item.id !== active_user.id))

    const Isfollowing = (item) => active_user?.following
            .find((person) => person._id === item)
            ? true
            : false;

    return (
        <div className='suggested-users-main-container'>

            <div className='suggested-users-heading'>
                <p>People you Might know</p>
            </div>
            <div>

                {suggestedUserFilter.map((user) => (
                    <div key={user.firstName}>
                        <div className="suggested-users-profile">
                            <img
                                onClick={() => navigate(`/userprofile/${user._id}`)}
                                style={{
                                cursor: "pointer"
                            }}
                                className='suggested-users-profile-pic'
                                src={user.avatar}
                                alt=""/>
                            <div
                                onClick={() => navigate(`/userprofile/${user._id}`)}
                                style={{
                                cursor: "pointer"
                            }}
                                className='suggested-users-profile-details-container'>
                                <p className='suggested-users-profile-firstname'>{user.firstName}</p>
                                <p className='suggested-users-profile-username'>@{user.username}</p>
                            </div>
                            <div class="suggested-users-button-container">
                                <button
                                    className='suggested-users-profile-btn'
                                    onClick={() => Isfollowing(user._id)
                                    ? UnfollowUser(user._id)
                                    : followUser(user._id)}>{Isfollowing(user._id)
                                        ? "-Unfollow"
                                        : "+Follow"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* {console.log(active_user)} */}
            {/* {console.log(suggestedUserFilter)} */}
        </div>
    )
}
