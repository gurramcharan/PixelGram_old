export const postReducer = (state, action) => {
    switch (action.type) {
      case "loading_post":
        return { ...state, isPostLoading: action.payload };
      case "set_post":
        return { ...state, allpost: action.payload };
      case "set_curr_user_post":
        return { ...state, curr_user_post: action.payload };
      default:
        return state;
    }
  };
  