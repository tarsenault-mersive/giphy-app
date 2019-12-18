import { AppState, gif } from "./reducer";

export const gifSelector = (state: AppState): gif | null => {
  return state.result;
};
