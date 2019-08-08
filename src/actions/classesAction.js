import { GET_USER_CLASSES } from "./type";

import hairSalonApi from "../apis/hairSalonApi";

export const getAllUserClasses = () => {
  return async (dispatch, getState) => {
    const response = await hairSalonApi.get("/users/getAllUserClasses");
    dispatch({
      type: GET_USER_CLASSES,
      payload: response.data.response.classes
    });
  };
};
