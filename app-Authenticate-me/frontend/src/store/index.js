import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";

const rootReducer = combineReducers({
  session: sessionReducer,
});

// enhancer variable that will be set to different store enhancers
// depending on if the Node environment is in development or production
let enhancer;

// In production, the enhancer should only apply the thunk middleware
if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
/**
 * configureStore function that takes in an optional preloadedState.
 * Return createStore invoked with the rootReducer, the preloadedState, and the enhancer.
 * @param {*} preloadedState
 * @returns createStore
 */

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
