import { GET_ALL_USER_AVAILABLE } from "../actions/type";

const intialState = {};
const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_AVAILABLE:
      return {
        ...state,
        userList: action.payload.response.users,
        totalCount: action.payload.totalCount
      };
    default:
      return state;
  }
};

export default userReducer;
