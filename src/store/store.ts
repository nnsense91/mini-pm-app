import { configureStore } from "@reduxjs/toolkit";
import { fakePostsApi } from "../api/fakePostsApi";

const devMode = process.env.NODE_ENV === "development";

export const store = configureStore({
  reducer: {
    [fakePostsApi.reducerPath]: fakePostsApi.reducer,
  },
  devTools: devMode,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fakePostsApi.middleware)
});

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch