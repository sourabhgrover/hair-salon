import {
  GET_ALL_USER_AVAILABLE,
  GET_USER_BY_ID,
  DELETE_USER
} from "../actions/type";
import _ from "lodash";

const intialState = {};
const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_AVAILABLE:
      return {
        ...state,
        userList: action.payload.response.users,
        totalCount: action.payload.totalCount,
        pageCount: action.payload.pageCount
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        currentUser: action.payload.response.user
      };
    case DELETE_USER: {
      let key = _.findIndex(state.userList, ["id", action.payload]);
      let cloneUserList = Object.assign({}, state.userList);
      let updatedUserList = _.omit(cloneUserList, key);
      let arrayUserList = _.toArray(updatedUserList);
      return {
        ...state,
        userList: arrayUserList
      };
    }

    default:
      return state;
  }
};

export default userReducer;
