import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ADMIN_URL_ENDPOINTS } from "../utils/urls";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ADMIN_URL_ENDPOINTS.category.GET_CATEGORY,
    }),
  }),
});


export const { useGetCategoriesQuery } = categoryApi;
export default categoryApi
