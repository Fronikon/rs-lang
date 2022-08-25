import { combineReducers } from "redux";
import authReducer from "./authReducer";
import navMenuReducer from "./navMenuReducer";

const rootReducer = combineReducers({
  navMenu: navMenuReducer,
  auth: authReducer 
});

export default rootReducer;