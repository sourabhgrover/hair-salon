import { GET_ALL_USER_AVAILABLE } from "./type";

import hairSalonApi from "../apis/hairSalonApi";

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
