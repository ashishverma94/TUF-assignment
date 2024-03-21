import { CodesReducer } from "./reducers/code";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    code: CodesReducer,
  },
});

export default Store;
