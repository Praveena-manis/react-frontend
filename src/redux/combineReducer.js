import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const combineReducer = combineReducers({ user: userReducer });
export default combineReducer;