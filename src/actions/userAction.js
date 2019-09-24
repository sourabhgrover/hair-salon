import { stopSubmit } from "redux-form";
import hairSalonApi from "../apis/hairSalonApi";
// import history from "../history";
import { GET_ALL_USER_AVAILABLE, GET_USER_BY_ID, DELETE_USER } from "./type";

export const getAllUserAvailable = data => {
  return async (dispatch, getState) => {
    // const response = await hairSalonApi.get("/users/getAllUsersAvailable/10/0");
    const response = await hairSalonApi.get(
      `/users/getAllUsersAvailable/${data.limit}/${data.offset}`
    );

    // Count number of pages
    response.data.pageCount = Math.ceil(response.data.totalCount / data.limit);
    dispatch({
      type: GET_ALL_USER_AVAILABLE,
      payload: response.data
    });
  };
};

export const createUser = (data, routerHistory) => {
  return async (dispatch, getState) => {
    const response = await hairSalonApi.post("/users/createNewUser", data);
    if (response.data.success) {
      routerHistory.push("/allUserList");
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

export const updateUserById = (userId, data, routerHistory) => {
  return async dispatch => {
    const response = await hairSalonApi.put(
      `/users/updateUserInformation/${userId}`,
      data
    );
    if (response.data.success) {
      // dispatch({ type: USER_CREATED });
      // history.push("/allUserList");
      routerHistory.push("/allUserList");
    }
  };
};

export const deleteUser = (id, routerHistory) => {
  return async dispatch => {
    const response = await hairSalonApi.delete(
      `/users/deleteUserInformation/${id}`
    );
    if (response.data.success) {
      dispatch({ type: DELETE_USER, payload: id });
      // routerHistory.push("/");
    }
  };
};
