import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '../../Contexts/AuthContext';
import {PostContext} from "../../Contexts/PostContext";
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {
  const { active_user } = useContext(AuthContext);
  const { postState } = useContext(PostContext);
  const navigate = useNavigate();
  const [followers, setFollowers] = useState([]);
  const [homepost, setHomepost] = useState([]);
  const IsFollowers = active_user.following.map((user) => user.username);
  const filterHomePost = followers.map((follower) =>
    postState.allpost.map((post) => {
      return post.username === follower ? post : null;
    })
  );

  useEffect(() => {
    setFollowers(IsFollowers);
    setHomepost(filterHomePost);
  }, [active_user]);
  
  return (
    <div>
        <p>Home</p>
      {/* {postState.allpost.map((post) => (
        <PostDisplay item={post} />
      ))} */}
      {console.log(postState.curr_user_post)}
    </div>
  )
}
