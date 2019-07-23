import { GET_USER_CLASSES } from "./type";

import hairSalonApi from "../apis/hairSalonApi";

export const getAllUserClasses = () => {
  return async (dispatch, getState) => {
    const response = await hairSalonApi.get("/posts");
    dispatch({
      type: GET_USER_CLASSES,
      payload: response
    });
  };
};
