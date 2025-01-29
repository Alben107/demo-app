import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://restcountries.com/";

export const publicAPI = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
});

export default publicAPI;
