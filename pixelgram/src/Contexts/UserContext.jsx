import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";

import { AuthContext } from "./AuthContext";
import { ReactToastify } from "../Utils/ReactToastify";
import { useReducer } from "react";
import { userReducer } from "../reducers/UserReducer";
import { useState } from "react";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const { curr_token, active_user, authDispatch } = useContext(AuthContext);
  const [className, setClassname] = useState("light-theme");
  const [theme, setTheme] = useState(false);
  const [search, setSearch] = useState("");

  const userInitial = {
    user_loading: false,
    users: [],
    userbio: active_user ? active_user.bio : "",
    userProtfolio: active_user ? active_user.profile : "",
    userAvatar: active_user ? active_user.avatar : "",
  };
  const [userstate, userDispatch] = useReducer(userReducer, userInitial);
  const [filteredusers, setFilteredusers] = useState([]);
  console.log(filteredusers);
  const getallusers = async () => {
    try {
      const response = await axios.get("/api/users", {});
      //console.log(response)
      userDispatch({ type: "user_loading", payload: true });
      if (response.status === 200) {
        userDispatch({ type: "set_users", payload: response.data.users });
        setFilteredusers(response.data.users);
        userDispatch({ type: "user_loading", payload: false });
      }
    } catch (error) {
      console.log("error while fetching users from BD", error);
    }
  };

  const EditUser = async (e) => {
    e.preventDefault();
    const profile = e.target.elements?.user_portfolio.value;
    const bio = e.target.elements?.user_bio.value;
    const avatar = e.target.src;
    //console.log("inside context", avatar);
    try {
      userDispatch({ type: "user_loading", payload: true });

      const response = await fetch("/api/users/edit", {
        method: "POST",
        headers: { authorization: curr_token },
        body: JSON.stringify({ userData: { bio, profile, avatar } }),
      });
      //console.log(userstate);
      const temp = await response.json();
      //console.log(temp);
      if (response.status === 201) {
        userDispatch({ type: "set_bio", payload: temp.user.bio });
        userDispatch({ type: "set_portfolio", payload: temp.user.profile });
        userDispatch({ type: "set_avatar", payload: temp.user.avatar });
        userDispatch({ type: "user_loading", payload: false });
        authDispatch({ type: "set_user", payload: temp.user });
        localStorage.setItem("curr_user", JSON.stringify(temp.user));
        ReactToastify("Profile updated", "success");
      }
      //console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [userstate]);
  const handleTheme = () => {
    if (theme === false) {
      setClassname("dark-theme");
    } else {
      setClassname("light-theme");
    }
  };
  useEffect(() => {
    getallusers();
  }, []);
  const HandleSearch = () => {
    console.log(search.length, search);
    const temp =
      search.length > 0
        ?
          filteredusers.filter((person) =>
            person.firstName.toLowerCase().includes(search.toLowerCase())
          ) 
        : userstate.users;
    setFilteredusers(temp);
  };

  return (
    <UserContext.Provider
      value={{
        userstate,
        userDispatch,
        EditUser,
        handleTheme,
        className,
        theme,
        setTheme,
        HandleSearch,
        search,
        setSearch,
        filteredusers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
