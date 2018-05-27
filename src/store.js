import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducers";

const history = createHistory();

const initialState = {};
const enhancers = [];

// const persistedReducer = persistReducer(persistConfig, rootReducer);
/**
 *  put the intl provider in thunk, so redux action can use it
 *
 *  sample usage:
 *  export const loadPeople = body => (dispatch, getState, { intl }) => {
 *  const state = getState();
 *  console.log(intl(state).messages);
 *  ...
 */
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);
const persistor = persistStore(store);
export { store, persistor, history };
