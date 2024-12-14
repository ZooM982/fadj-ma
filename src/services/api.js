// src/services/api.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fadj-ma-server2.onrender.com/api",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (formData) => ({
        url: "/users/login",
        method: "POST",
        body: formData,
      }),
    }),
    // Vous pouvez ajouter d'autres endpoints ici
  }),
});

export const { useLoginUserMutation } = api;
