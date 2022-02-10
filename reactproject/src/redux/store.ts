import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { albumReducer } from "./reducers/albumReducer";


export const store = createStore(albumReducer, applyMiddleware(thunk))