/**
 * Root Reducer
 */
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import Reducers
import loader from "components/Loader/LoaderReducer";
import sideBar from "components/Sidebar/SidebarReducer";
import home from "pages/home/HomeReducer";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: ["routerReducer"]
};
// Combine all reducers into one root reducer
const appReducer = combineReducers({
  routerReducer,
  loader,
  sideBar,
  home
});

export default persistReducer(persistConfig, appReducer);
