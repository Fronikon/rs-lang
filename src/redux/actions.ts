import { ActionTypes } from "../types/enums";

// at the end of the function name should be written AC(Action Creator)

export const switchIsNavMenuOpenAC = () => {
  return {
    type: ActionTypes.switchIsNavMenuOpen
  };
};