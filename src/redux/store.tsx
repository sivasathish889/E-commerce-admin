import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "../services/categoryApiReducer";
import productsApi from "../services/productApiReducer";

const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
