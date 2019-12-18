import { AppState, gif } from "./reducer";

export const gifSelector = (state: AppState): gif | null => {
  return state.result;
};

export const likedGifsSelector = (state: AppState): gif[] => {
  return state.liked;
};
