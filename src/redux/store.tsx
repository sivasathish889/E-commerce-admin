import { configureStore } from "@reduxjs/toolkit";
import { apiServices } from "../services/apiServices";

const store = configureStore({
  reducer: {
    [apiServices.reducerPath]: apiServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiServices.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
