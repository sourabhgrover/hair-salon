import { combineReducers } from "redux";

import classReducer from "./classReducer";

export default combineReducers({
  classes: classReducer
});
