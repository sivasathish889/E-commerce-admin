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
    getCategoryById: builder.query({
      query: (id) => `${ADMIN_URL_ENDPOINTS.category.GET_CATEGORY}/${id}`,
    }),
    postCategory: builder.mutation({
      query: (data) => ({
        url: ADMIN_URL_ENDPOINTS.category.POST_CATEGORY,
        method: "POST",
        body: data,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `${ADMIN_URL_ENDPOINTS.category.UPDATE_CATEGORY}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${ADMIN_URL_ENDPOINTS.category.DELETE_CATEGORY}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery,useDeleteCategoryMutation,useGetCategoryByIdQuery,useUpdateCategoryMutation} = categoryApi;
export default categoryApi;
