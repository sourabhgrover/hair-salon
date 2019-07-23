import { GET_USER_CLASSES } from "../actions/type";

const classReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_CLASSES:
      return state;
    default:
      return state;
  }
};

export default classReducer;
