import { stopSubmit } from "redux-form";

import { GET_ALL_USER_AVAILABLE, GET_USER_BY_ID } from "./type";
import hairSalonApi from "../apis/hairSalonApi";
import history from "../history";

export const getAllUserAvailable = data => {
  return async (dispatch, getState) => {
    // const response = await hairSalonApi.get("/users/getAllUsersAvailable/10/0");
    const response = await hairSalonApi.get(
      `/users/getAllUsersAvailable/${data.limit}/${data.offset}`
    );
    dispatch({
      type: GET_ALL_USER_AVAILABLE,
      payload: response.data
    });
  };
};

export const createUser = data => {
  return async (dispatch, getState) => {
    const response = await hairSalonApi.post("/users/createNewUser", data);
    if (response.data.success) {
      // dispatch({ type: USER_CREATED });
      history.push("/allUserList");
    } else {
      // Server Side Validation Handling
      dispatch(stopSubmit("UserCreate", { _error: response.data.message }));
    }
  };
};

export const getUserById = id => {
  return async dispatch => {
    const response = await hairSalonApi.get(`/users/getUserDetailsById/${id}`);
    dispatch({ type: GET_USER_BY_ID, payload: response.data });
  };
};

export const updateUserById = (userId, data) => {
  return async dispatch => {
    const response = await hairSalonApi.post(
      `/users/updateUserDetails/${userId}`,
      data
    );
    console.log(response);
    dispatch({ type: "" });
  };
};