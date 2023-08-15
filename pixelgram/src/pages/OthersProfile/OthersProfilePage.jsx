import React, {useContext} from 'react';
import {UpperNav} from '../../Components/upperNav/UpperNav';
import {SideNav} from '../../Components/sideNav/SideNav';
import {SuggestedUsers} from '../../Components/suggestedUsers/SuggestedUsers';
import {useParams} from 'react-router-dom';
import {UserContext} from '../../Contexts/UserContext';
import {ProfileCard} from '../../Components/profileCard/ProfileCard';
import { PostContext } from '../../Contexts/PostContext';
import { PostDisplay } from '../../Components/PostDisplay/PostDisplay';

export const OthersProfilePage = () => {
    const {userId} = useParams();
    const {filteredusers} = useContext(UserContext);
    const {postState} = useContext(PostContext);
    const filterUser = filteredusers.filter((user) => user._id == userId)

    const filteredHomePosts = postState
        .allpost
        .filter((post) => filterUser.some(user => user.username === post.username))

    return (
        <div>
            <UpperNav/>
            <div className='home-main-container'>
                <div className='side-nav'>
                    <SideNav/>
                </div>
                <div className='main-content'>
                    <div>
                        {filterUser.map((userprofile) => (<ProfileCard profiledata={userprofile}/>))}
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
                    <SuggestedUsers/> {console.log(userId)}
                </div>
            </div>
        </div>
    )
}
