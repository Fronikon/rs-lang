import { combineReducers } from "redux";
import navMenuReducer from "./navMenuReducer";

const rootReducer = combineReducers({
  navMenu: navMenuReducer
});

export default rootReducer;