import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import groupInfoReducer from './Slices/groupSLice';

const rootReducer = combineReducers({
  groupInfo: groupInfoReducer
});
export const store = configureStore({
  reducer: rootReducer,

});
setupListeners(store.dispatch);