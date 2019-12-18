import { SEARCH_RESULTS, Action, LIKE_GIF } from "./actions";

export type gif = {
  height: string;
  size: string;
  url: string;
  width: string;
};
export type AppState = {
  result: gif | null;
  liked: gif[];
};

const initialState: AppState = {
  result: null,
  liked: []
};

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        result: action.payload
      };
    case LIKE_GIF:
      if (state.result !== null) {
        const newlikes = [state.result, ...state.liked].slice(0, 5);
        return {
          ...state,
          liked: newlikes
        };
      } else return state;
    default:
      return state;
  }
}
