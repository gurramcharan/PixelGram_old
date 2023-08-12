import React, { createContext, useContext, useReducer } from "react";

import { boookmarkReducer } from "../reducers/BookmarkReducer";
import { AuthContext } from "./AuthContext";
import { ReactToastify } from "../Utils/ReactToastify";


export const BookmarkContext = createContext();
export default function BookmarkProvider({ children }) {
  const { curr_token } = useContext(AuthContext);
  const bookmarkInitial = {
    allbookmarks: [],
    curr_user_bookmarks: [],
  };
  const [bookmarkState, bookmarkDispatch] = useReducer(
    boookmarkReducer,
    bookmarkInitial
  );
  const addToBookmark = async (id) => {
    try {
      const response = await fetch(`/api/users/bookmark/${id}`, {
        method: "POST",
        headers: { authorization: curr_token },
      });
      const temp = await response.json();
        //console.log(temp)
      if (response.status === 200) {
        ReactToastify("Added to Bookmark", "info");
        bookmarkDispatch({
          type: "curr_user_bookmark",
          payload: temp.bookmarks,
        });
        
      }
    } catch (error) {
      console.log("error in adding to bookmark", error);
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    }
  };
  const removeFromBookmark = async (id) => {
    try {
      const response = await fetch(`/api/users/remove-bookmark/${id}`, {
        method: "POST",
        headers: { authorization: curr_token },
      });
      console.log(response.status);
      //console.log(await response.json());
      const temp = await response.json();
      bookmarkDispatch({
        type: "curr_user_bookmark",
        payload: temp.bookmarks,
      });
      ReactToastify("Removed from Bookmark", "info");
      
    } catch (error) {
      console.log("error in removeing bookmark", error);
      error?.response?.data?.errors?.map((e) => ReactToastify(e, "error"));
    }
  };

  return (
    <BookmarkContext.Provider
      value={{ addToBookmark, bookmarkState, removeFromBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
