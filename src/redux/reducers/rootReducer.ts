import { combineReducers } from "redux";
import authReducer from "./authReducer";
import navMenuReducer from "./navMenuReducer";
import textbookReducer from './textbookReducer';

const rootReducer = combineReducers({
  navMenu: navMenuReducer,
  textbook: textbookReducer,
  auth: authReducer 
});

export default rootReducer;