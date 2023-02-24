import {configureStore} from "@reduxjs/toolkit";
import {getFileAPI} from "store/services/getFileDataApiSlice";
import ErrorMessageSlice from "./services/errorMessageSlice";

export const store = configureStore({
  reducer: {
    modalError: ErrorMessageSlice,
    [getFileAPI.reducerPath]: getFileAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getFileAPI.middleware)
});
