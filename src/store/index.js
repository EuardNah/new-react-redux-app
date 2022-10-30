import {applyMiddleware, combineReducers, createStore} from "redux";
import countReducer from "./countReduser";
import userReducer from "./userReduser";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReduser = combineReducers({
     countReducer,
     userReducer
})

export const store = createStore(rootReduser, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)