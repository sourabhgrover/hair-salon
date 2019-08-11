import { GET_USER_CLASSES, GET_EDUCATOR_CLASSES } from "./type";

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

export const getEducatorClassesById = data => {
  return async (dispatch, getState) => {
    const response = await hairSalonApi.get(
      `/classes/getAllEducatorClassesById/${data.user_id}/${data.limit}/${
        data.offset
      }`
    );
    // console.log(response.data.response.classes);
    dispatch({
      type: GET_EDUCATOR_CLASSES,
      payload: response.data.response.classes
    });
  };
};
