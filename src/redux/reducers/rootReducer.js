import { combineReducers } from "redux";

const intialState = {
    posts:[],
}

function getPosts(state = intialState , action){
    switch (action.type){
        case "posts" :
            return Object.assign({}, state, {
                posts: action.posts,
              });
        default:
              return state;
    }
}
const rootReducer = combineReducers({ getPosts });

export default rootReducer;