import {
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  FETCH_USER_LOADING,
} from "./type";
import axios from "axios";

const url = "https://randomuser.me/api/?page=3&results=10";

export const fetchUserLoading = () => {
  return {
    type: FETCH_USER_LOADING,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFail = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserLoading());
    axios
      .get(url)
      .then((res) => {
        const user = res.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchUserFail(errMsg));
      });
  };
};
