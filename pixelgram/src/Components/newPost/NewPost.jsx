import React, {useContext} from 'react'
import {PostContext} from '../../Contexts/PostContext'
import {BsEraserFill} from "react-icons/bs"
import {GoShare} from "react-icons/go"
import "./NewPost.css"
import {AuthContext} from '../../Contexts/AuthContext'

export const NewPost = () => {
    const {createPost} = useContext(PostContext);
    const {active_user} = useContext(AuthContext)
    return (
        <div>

            <form className='newpost-main-container' onSubmit={(e) => createPost(e)}>
                <div className='flex-row'>
                    <img className='postdisplay-user-icon' src={active_user.avatar}/>
                </div>
                <div>
                    <textarea
                        className='newpost-input'
                        name="new-post"
                        id="post_text"
                        cols="100"
                        rows="5"
                        placeholder="Mind Matters: Share What's Rattling in Your Thoughts!"/>
                    <div className="newpost-btn-container">
                        <button className='newpost-submit-btn' type="submit">
                            <GoShare/>
                        </button>
                        <button className='newpost-reset-btn' id="reset" type="reset"><BsEraserFill/></button>
                    </div>
                </div>
            </form>
        </div>
    )
}
