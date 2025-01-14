import { configureStore } from "@reduxjs/toolkit";
import { getMenu } from "../api/menu";

import { createApi } from "@reduxjs/toolkit/query";

const api = createApi({
  baseQuery: () => {},
  endpoints: (build) => ({
    pokenonList: build.query({
      query() {
        return { data: getMenu(1) };
      },
    }),
  }),
});

export const { usePokenonListQuery } = api;

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
