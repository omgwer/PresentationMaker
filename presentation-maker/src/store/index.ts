import {createStore} from "redux";
import {applyMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = createStore({}, applyMiddleware(thunk))