import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import topheadingsReducer from "./topheadingsSlice";

export const store = configureStore({
  reducer: {
    topHeadings: topheadingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
