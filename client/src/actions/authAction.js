import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "./../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register ", userData)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Login - Get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login ", userData)
    .then(res => {
      // save to localStorage
      const { token } = res.data;
      // set to localStorage , remember Ghadeer it only takes a string
      localStorage.setItem("jwtToken", token);
      //set token to Auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//log user out
export const logoutUser = () => dispatch => {
  // remove the token from the localStorage
  localStorage.removeItem("jwtToken");
  // remove the auth header for future requests
  setAuthToken(false);
  //set the current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  //redirect to homepage
  window.location.href = "/";
};
