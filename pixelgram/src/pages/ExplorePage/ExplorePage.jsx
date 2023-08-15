import React, {useContext} from 'react'
import {UpperNav} from '../../Components/upperNav/UpperNav';
import {SideNav} from '../../Components/sideNav/SideNav';
import {SuggestedUsers} from '../../Components/suggestedUsers/SuggestedUsers';
import {PostContext} from '../../Contexts/PostContext'
import {FilterPosts} from '../../Components/filterPosts/FilterPosts';
import { PostDisplay } from '../../Components/PostDisplay/PostDisplay';

export const ExplorePage = () => {
    const {postState} = useContext(PostContext)
    return (
        <div>
            <UpperNav/>
            <div className='home-main-container'>
                <div className='side-nav'>
                    <SideNav/>
                </div>
                <div className='main-content'>
                <p className="main-content-heading">Explore</p>
                    <FilterPosts/> 
                    {postState
                        .allpost
                        .map((item) => (
                            <div>
                                <PostDisplay post={item} />
                            </div>
                        ))}
                </div>
                <div className="suggested-users">
                    <SuggestedUsers/>
                </div>
            </div>
        </div>
    )
}
