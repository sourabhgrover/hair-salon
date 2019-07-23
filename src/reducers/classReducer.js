import { GET_USER_CLASSES } from "../actions/type";

const classReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_CLASSES:
      // return state;
      return [
        { title: "Mithi Mithi", duration: "3:05" },
        { title: "Trending Nakhra", duration: "2:26" }
      ];
    default:
      // return state;
      return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "photo", duration: "4:15" },
        { title: "Mithi Mithi", duration: "3:05" },
        { title: "Trending Nakhra", duration: "2:26" }
      ];
  }
};

export default classReducer;
