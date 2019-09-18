import { GET_ALL_USER_AVAILABLE, GET_USER_BY_ID } from "../actions/type";

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
    default:
      return state;
  }
};

export default userReducer;
