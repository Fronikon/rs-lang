import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import navMenuReducer from "./navMenuReducer";
import textbookReducer from './textbookReducer';

const rootReducer = combineReducers({
  navMenu: navMenuReducer,
  textbook: textbookReducer,
  auth: authReducer,
  loading: loadingReducer
});

export default rootReducer;