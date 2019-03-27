import {
  GET_ERRORS,
  POST_LOADING,
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST
} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
