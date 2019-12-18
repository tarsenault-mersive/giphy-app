import { searchResultAction, SEARCH, Action } from "./actions";
import axios from "axios";
import { Middleware, MiddlewareAPI, Dispatch } from "redux";

const middleware: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch
) => (action: Action) => {
  next(action);
  switch (action.type) {
    case SEARCH:
      const term = action.payload.term;
      const weirdness = action.payload.weirdness;
      axios({
        url: `http://api.giphy.com/v1/gifs/translate?s=${term}&api_key=uq3F49wiUlbx2YSBAzLaBZhlY1SAC4K2&weirdness=${weirdness}`
      })
        .then(response => {
          dispatch(
            searchResultAction(response.data.data.images.downsized_large)
          );
        })
        .catch(error => {
          throw error;
        });
      break;
    default:
      break;
  }
};

export default middleware;
