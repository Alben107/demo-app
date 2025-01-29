import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import publicAPI from "../utils/publicAPI";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    [publicAPI.reducerPath]: publicAPI.reducer,
    auth: authSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
