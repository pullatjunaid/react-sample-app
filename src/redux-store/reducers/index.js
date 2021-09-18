import { useReducer } from "react";
import { combineReducers } from "redux";
import album from './album'

export default combineReducers({
    album: album
});