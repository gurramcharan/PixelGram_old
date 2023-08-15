import React, {useContext, useState} from 'react'
import {UserContext} from '../../Contexts/UserContext'
import {AuthContext} from '../../Contexts/AuthContext'
import {Link} from 'react-router-dom'
import {BiEdit} from "react-icons/bi"
import {BsTrash} from "react-icons/bs"
import {HiOutlineHeart, HiHeart} from "react-icons/hi"
import {BiBookmarks, BiSolidBookmarks} from "react-icons/bi"
import {AiOutlineShareAlt} from "react-icons/ai"
import {PostContext} from '../../Contexts/PostContext'
import {BookmarkContext} from "../../Contexts/BookmarkContext"
import "./PostDisplay.css"

export const PostDisplay = ({post}) => {
    const {filteredusers} = useContext(UserContext)
    const {active_user, followUser, UnfollowUser} = useContext(AuthContext);
    const {postDelete, LikePost, DislikePost, postEdit} = useContext(PostContext);
    const {addToBookmark, bookmarkState, removeFromBookmark} = useContext(BookmarkContext);
    const userFilter = filteredusers.filter((user) => user.username === post.username)
    const [edittext,
        setEdittext] = useState("");
    const [displayedit,
        setDisplatedit] = useState(false);

    const Isfollowing = (item) => active_user
        .following
        .find((person) => person._id === item)
        ? true
        : false;

    return (
        <div>
            {userFilter.map((user) => (
                <div className='postdisplay-main-container'>
                    <div className="postdisplay-user-icon-container">
                        {(user.username === active_user.username)
                            ? (
                                <div>
                                    <Link to="/userprofile"><img className='postdisplay-user-icon' src={user.avatar}/></Link>
                                </div>
                            )
                            : (
                                <div>
                                    <Link to={`/userprofile/${user._id}`}><img className='postdisplay-user-icon' src={user.avatar} width="30rem"/></Link>
                                </div>
                            )}
                    </div>
                    <div className="postdisplay-details-container">
                        <div>
                            {(user.username === active_user.username)
                                ? (
                                    <div className='postdisplay-userdetails-container'>
                                        <Link className='postdisplay-userdetails-link' to="/userprofile">
                                            <p className='postdisplay-firstname'>{user.firstName}</p>
                                            <p className='postdisplay-username'>@{user.username}
                                                .
                                            </p>
                                        </Link>
                                        <div className='postdisplay-edit-delete-container'>
                                            <p onClick={() => setDisplatedit(!displayedit)} className='postdisplay-edit'><BiEdit/></p>
                                            <p className='postdisplay-delete' onClick={() => postDelete(post._id)}><BsTrash/></p>
                                        </div>
                                    </div>
                                )
                                : (
                                    <div className='postdisplay-userdetails-container'>
                                        <Link className='postdisplay-userdetails-link' to={`/userprofile/${user._id}`}>
                                            <p className='postdisplay-firstname'>{user.firstName}</p>
                                            <p className='postdisplay-username'>@{user.username}
                                                .
                                            </p>
                                        </Link>
                                        <div className='postdisplay-follow-container'>
                                            <button
                                                className='postdisplay-follow'
                                                onClick={() => Isfollowing(user._id)
                                                ? UnfollowUser(user._id)
                                                : followUser(user._id)}>{Isfollowing(user._id)
                                                    ? "-Unfollow"
                                                    : "+Follow"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                        </div>

                        <div
                            className="post-edit"
                            style={{
                            display: displayedit
                                ? "block"
                                : "none"
                        }}>
                            <textarea
                                name="edit-post"
                                defaultValue={post.content}
                                onChange={(e) => {
                                setEdittext(e.target.value);
                            }}
                                cols="30"
                                rows="10"
                                />
                            <button
                                onClick={() => {
                                setDisplatedit(!displayedit);
                                postEdit(post._id, edittext);
                            }}>
                                Update
                            </button>
                        </div>

                        <div className='postdisplay-post-container'>
                            <p className='postdisplay-post-content'>{post.content}</p>
                            {post.post_img
                                ? (<img
                                    className='postdisplay-post-img'
                                    src={post
                                    ?.post_img}
                                    alt={post.media_type}/>)
                                : (
                                    <p className='postdisplay-post-empty-img'></p>
                                )}
                        </div>
                        <div className='postdisplay-like-bookmark-container'>
                            <div className='postdisplay-like-container'>
                                {post.likes.likedBy.length > 0
                                    ? (post.likes.likedBy.map(like => like._id === active_user._id)
                                        ? (
                                            <p className='postdisplay-like' onClick={() => DislikePost(post._id)}><HiHeart/></p>
                                        )
                                        : (
                                            <p className='postdisplay-like' onClick={() => LikePost(post._id)}><HiOutlineHeart/></p>
                                        ))
                                    : (
                                        <p className='postdisplay-like' onClick={() => LikePost(post._id)}><HiOutlineHeart/></p>
                                    )}
                                {post.likes.likeCount > 0
                                    ? (
                                        <p className='postdisplay-likecount'>{post.likes.likeCount}</p>
                                    )
                                    : (
                                        <p></p>
                                    )}
                            </div>
                            <div className='postdisplay-bookmark-container'>
                                {bookmarkState
                                    .curr_user_bookmarks
                                    .find((bpost) => bpost === post._id)
                                    ? (
                                        <p
                                            className='postdisplay-bookmark'
                                            onClick={() => removeFromBookmark(post._id)}><BiSolidBookmarks/></p>
                                    )
                                    : (
                                        <p className='postdisplay-bookmark' onClick={() => addToBookmark(post._id)}><BiBookmarks/></p>
                                    )}
                            </div>
                            <div className='postdisplay-share-container'>
                                <p className='postdisplay-share'><AiOutlineShareAlt/></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
