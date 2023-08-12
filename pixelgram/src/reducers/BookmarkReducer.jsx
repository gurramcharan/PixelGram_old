export const boookmarkReducer=(state,action)=>{
    switch(action.type){
        case "all_bookmarks":
            return {...state,allbookmarks:action.payload}
        case "curr_user_bookmark":
            return {...state,curr_user_bookmarks:action.payload}
        default:
            return state
    }
}