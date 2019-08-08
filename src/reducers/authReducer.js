import { SIGN_IN, SIGN_OUT } from "../actions/type";

const INTIAL_STATE = {
  isSignedIn: false,
  userData: null,
  token: null
};
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userData: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userData: null };
    default:
      return state;
  }
};
