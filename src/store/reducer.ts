import { SEARCH_RESULTS, Action } from "./actions";

export type gif = {
  height: string;
  size: string;
  url: string;
  width: string;
};
export type AppState = {
  result: gif | null;
  liked: string[];
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
    default:
      return state;
  }
}
