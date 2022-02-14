import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { AlbumReducer } from "./AlbumReducer";

export const store = createStore(AlbumReducer, applyMiddleware(thunk));
