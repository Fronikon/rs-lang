import { ActionTypes } from "../types/enums";

const initialState = {
  isNavMenuOpen: false
};

type NavMenuStateType = typeof initialState

type ActionType = {
  type: string,
}

const navMenuReducer = (state: NavMenuStateType = initialState, action: ActionType): NavMenuStateType => {
  switch (action.type) {
  case ActionTypes.switchIsNavMenuOpen: {
    return {...state, isNavMenuOpen: !state.isNavMenuOpen};
  }
  default: {
    return state;
  }
  }
};

export default navMenuReducer;