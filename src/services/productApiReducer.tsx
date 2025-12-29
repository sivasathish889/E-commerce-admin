import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ADMIN_URL_ENDPOINTS } from "../utils/urls";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ADMIN_URL_ENDPOINTS.product.GET_PRODUCT,
    }),
    getProductById: builder.query({
      query: (id) => `${ADMIN_URL_ENDPOINTS.product.GET_PRODUCT_BY_ID}/${id}`,
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        url: ADMIN_URL_ENDPOINTS.product.POST_PRODUCT,
        method: "POST",
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `${ADMIN_URL_ENDPOINTS.product.UPDATE_PRODUCT}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${ADMIN_URL_ENDPOINTS.product.DELETE_PRODUCT}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByIdQuery,
  usePostProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
export default productsApi;
