import { stopSubmit } from "redux-form";

import hairSalonApi from "../apis/hairSalonApi";
import { SIGN_IN, SIGN_OUT } from "./type";
import history from "../history";

export const login = data => {
  // return async (dispatch, getState) => {
  //   const response = await hairSalonApi.post("/users/login", "/users/login");
  //   const token = response.data.response.token;
  //   localStorage.setItem("jwtToken", token);
  //   hairSalonApi.defaults.headers.common["Authorization"] = token;
  //   dispatch({
  //     type: SIGN_IN,
  //     payload: response.data.response
  //   });
  //   history.push("/allUserList");
  // };

  return (dispatch, getState) => {
    hairSalonApi
      .post("/users/login", data)
      .then(response => {
        const token = response.data.response.token;
        localStorage.setItem("jwtToken", token);
        hairSalonApi.defaults.headers.common["Authorization"] = token;
        dispatch({
          type: SIGN_IN,
          payload: response.data.response
        });
        history.push("/allUserList");
      })
      .catch(error => {
        if (error.response) {
          dispatch(
            stopSubmit("LoginForm", { _error: error.response.data.message })
          );
          console.log(error.response);
        }
      });
  };
};

export const logout = () => {
  localStorage.removeItem("jwtToken");
  history.push("/");
  return { type: SIGN_OUT };
};
