import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { woolList, woolDetails, woolDelete, woolUpdate, woolCreate } from "./reducers/wool";
import { woolFilter } from "./reducers/filter";

const reducer = combineReducers({ woolList, woolDetails, woolDelete, woolUpdate, woolCreate, woolFilter });

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
