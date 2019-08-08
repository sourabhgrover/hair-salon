import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import classReducer from "./classReducer";
import authReducer from "./authReducer";

export default combineReducers({
  classes: classReducer,
  form: formReducer,
  user: authReducer
});
