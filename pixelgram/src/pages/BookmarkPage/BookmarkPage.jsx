import React, {useContext} from 'react'
import {UpperNav} from '../../Components/upperNav/UpperNav';
import {SideNav} from '../../Components/sideNav/SideNav';
import {SuggestedUsers} from '../../Components/suggestedUsers/SuggestedUsers';
import {BookmarkContext} from '../../Contexts/BookmarkContext';
import {PostContext} from '../../Contexts/PostContext';
import { PostDisplay } from '../../Components/PostDisplay/PostDisplay';

export const BookmarkPage = () => {
    const {bookmarkState} = useContext(BookmarkContext)
    const {postState} = useContext(PostContext);
    const filteredBookmarks = postState.allpost.filter((post) => bookmarkState.curr_user_bookmarks.some(bookmark => post._id === bookmark))

    return (
        <div>
            <UpperNav/>
            <div className='home-main-container'>
                <div className='side-nav'>
                    <SideNav/>
                </div>
                <div className='main-content'>
                    <p className="main-content-heading">Bookmarks</p>
                    {bookmarkState.curr_user_bookmarks.length <= 0
                        ? (
                            <p style={{display:"flex",justifyContent:"center",fontSize:"2rem",fontWeight:"200"}}>No Bookmarks 😕</p>
                        )
                        : (
                            <div>
                                {filteredBookmarks.map((bookmark) => (
                                    <PostDisplay post={bookmark}/>
                                ))}
                            </div>
                        )}
                </div>
                <div className="suggested-users">
                    <SuggestedUsers/>
                </div>
            </div>
        </div>
    )
}
