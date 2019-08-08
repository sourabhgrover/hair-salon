import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import classReducer from "./classReducer";
import authReducer from "./authReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const combineReducer = combineReducers({
  classes: classReducer,
  form: formReducer,
  user: authReducer
});

export default persistReducer(persistConfig, combineReducer);
