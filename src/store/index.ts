import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import middleware from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({
  name: "GIF App"
});
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleware))
);
