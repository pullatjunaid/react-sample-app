import { useReducer } from "react";
import { combineReducers } from "redux";
import album from './album'
import photos from './photos'

export default combineReducers({
    album: album,
    photo: photos
});