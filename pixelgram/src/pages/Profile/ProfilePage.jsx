import React, {useContext} from 'react';
import {UpperNav} from '../../Components/upperNav/UpperNav';
import {SideNav} from '../../Components/sideNav/SideNav';
import {SuggestedUsers} from '../../Components/suggestedUsers/SuggestedUsers';
import {AuthContext} from '../../Contexts/AuthContext';
import {PostContext} from '../../Contexts/PostContext';
import {PostDisplay} from '../../Components/PostDisplay/PostDisplay';
import {ProfileCard} from '../../Components/profileCard/ProfileCard';

export const ProfilePage = () => {
    const {active_user} = useContext(AuthContext);
    const {postState} = useContext(PostContext);

    const filteredHomePosts = postState
        .allpost
        .filter((post) => active_user.username === post.username)



    return (
        <div>
            <UpperNav/>
            <div className='home-main-container'>
                <div className='side-nav'>
                    <SideNav/>
                </div>
                <div className='main-content'>
                    <div>
                        <ProfileCard profiledata={active_user}/>
                    </div>
                    {filteredHomePosts.length > 0 ? (
                        <div>
                        {filteredHomePosts.map((homepost) => (<PostDisplay post={homepost}/>))}
                    </div>
                    ):(
                        <div style={{display:"flex",justifyContent:"center",fontSize:"2rem",fontWeight:"200",marginTop:"1rem"}}>No Posts Added😢</div>
                    )}
                </div>
                <div className="suggested-users">
                    <SuggestedUsers/>
                </div>
            </div>
        </div>
    )
}
