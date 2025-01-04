import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "@/redux/rootReducer";

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
