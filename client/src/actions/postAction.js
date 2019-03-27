import axios from "axios";

import {
  GET_ERRORS,
  POST_LOADING,
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST
} from "./types";

//add post
export const addPost = postData => dispatch => {
  axios
    .post("/api/posts ", postData)
    .then(res => dispatch({ type: ADD_POST, payload: res.data }))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
