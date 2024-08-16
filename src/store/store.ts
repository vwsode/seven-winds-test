import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import outlayRowsApi from "../api/outlayRowsApi";

export const store = configureStore({
  reducer: {
    [outlayRowsApi.reducerPath]: outlayRowsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(outlayRowsApi.middleware),
});

setupListeners(store.dispatch);
