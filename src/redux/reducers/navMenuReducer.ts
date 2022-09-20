import { ActionTypes } from "../../types/enums";
import { AnyAction } from 'redux';

const initialState = {
  isNavMenuOpen: false
};

type NavMenuStateType = typeof initialState

const navMenuReducer = (state: NavMenuStateType = initialState, action: AnyAction): NavMenuStateType => {
  switch (action.type) {
  case ActionTypes.switchIsNavMenuOpen: {
    return { ...state, isNavMenuOpen: !state.isNavMenuOpen };
  }
  default: {
    return state;
  }
  }
};

export default navMenuReducer;