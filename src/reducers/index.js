import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import classReducer from "./classReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const combineReducer = combineReducers({
  classes: classReducer,
  form: formReducer,
  auth: authReducer,
  user: userReducer
});

export default persistReducer(persistConfig, combineReducer);
