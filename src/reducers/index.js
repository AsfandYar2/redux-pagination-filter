import { combineReducers } from "redux";
import alert from "./alert";
import job from "./job";
import search from "./search";

export default combineReducers({ alert, job, search });
