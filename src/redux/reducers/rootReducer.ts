import { combineReducers } from "redux";
import navMenuReducer from "./navMenuReducer";
import textbookReducer from './textbookReducer';

const rootReducer = combineReducers({
  navMenu: navMenuReducer,
  textbook: textbookReducer
});

export default rootReducer;