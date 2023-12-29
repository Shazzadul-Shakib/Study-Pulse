import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";


// const rootReducer = combineReducers({
  
// })
export const store = configureStore({
  reducer: {
    
  },
});
setupListeners(store.dispatch);