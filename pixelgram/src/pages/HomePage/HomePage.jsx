import React, {useContext} from 'react'
import {AuthContext} from '../../Contexts/AuthContext';
import {PostContext} from "../../Contexts/PostContext";
import {UpperNav} from '../../Components/upperNav/UpperNav';
import {SideNav} from '../../Components/sideNav/SideNav';
import {SuggestedUsers} from '../../Components/suggestedUsers/SuggestedUsers';
import "./HomePage.css"
import { FilterPosts } from '../../Components/filterPosts/FilterPosts';
import { PostDisplay } from '../../Components/PostDisplay/PostDisplay';
import { NewPost } from '../../Components/newPost/NewPost';

export const HomePage = () => {
    const {active_user} = useContext(AuthContext);
    const {postState} = useContext(PostContext);
    

    const filteredHomePosts = postState.allpost.filter((post) => active_user.username === post.username || active_user.following.some(user => user.username === post.username))


    return (
        <div>
            <UpperNav/>
            <div className='home-main-container'>
                <div className='side-nav'>
                    <SideNav/>
                </div>
                <div className='main-content'>
                    <p className="main-content-heading">Home</p>
                    <FilterPosts />
                    <NewPost />
                    {filteredHomePosts.map((homepost) => (
                        <PostDisplay post={homepost} />
                    ))}
                </div>
                <div className="suggested-users">
                    <SuggestedUsers/>
                </div>
            </div>
            {console.log(postState.allpost)}
        </div>
    )
}
