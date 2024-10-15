import { combineReducers } from "@reduxjs/toolkit";
import checkout from "./checkout";

const rootReducer = combineReducers({
    checkout,
});

export default rootReducer;