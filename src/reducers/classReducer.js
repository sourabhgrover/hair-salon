import { GET_USER_CLASSES, GET_EDUCATOR_CLASSES } from "../actions/type";

const intialState = {};
const classReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_USER_CLASSES:
      return {
        ...state,
        ...action.payload
      };
    case GET_EDUCATOR_CLASSES:
      return {
        ...state,
        educatorClassesList: action.payload
      };
    default:
      return state;
  }
};

export default classReducer;
