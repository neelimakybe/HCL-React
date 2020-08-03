import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // whatever opern you perform, return updated store (don't set the store directly)
      return {
        ...state, // spread operator in JS which copies current value of the object
        items: action.payload
      };
    case NEW_POST:
      let nposts = []
      Object.assign(nposts, state.items)
      nposts.unshift(action.payload)
      return {
        ...state,
        items: nposts
      };
    case DELETE_POST:
      let posts = []
      Object.assign(posts, state.items)
      posts.splice(action.payload, 1)
      return {
        ...state,
        items: posts
      };
      return state;
    default:
      return state;
  }
}
