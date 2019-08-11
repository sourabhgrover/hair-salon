import hairSalonApi from "../apis/hairSalonApi";
import { SIGN_IN, SIGN_OUT } from "./type";
import history from "../history";

export const login = data => {
  return async (dispatch, getState) => {
    const response = await hairSalonApi.post("/users/login", data);
    const token = response.data.response.token;
    localStorage.setItem("jwtToken", token);
    dispatch({
      type: SIGN_IN,
      payload: response.data.response
    });
    hairSalonApi.defaults.headers.common["Authorization"] =
      localStorage.jwtToken;
    history.push("/allUserList");
  };
};

export const logout = () => {
  localStorage.removeItem("jwtToken");
  return { type: SIGN_OUT };
};
