import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ADMIN_URL_ENDPOINTS, AdminUrlEndpoints } from "../utils/urls";

export const apiServices = createApi({
  reducerPath: "apiServices",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}${ADMIN_URL_ENDPOINTS.base}`,
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (endpoint: keyof typeof AdminUrlEndpoints) =>
        AdminUrlEndpoints[endpoint],
    }),
    getDataById: builder.query<
      any,
      { endpoint: keyof typeof AdminUrlEndpoints; id: string }
    >({
      query: ({ endpoint, id }) => AdminUrlEndpoints[endpoint] + `/${id}`,
    }),
    postData: builder.mutation({
      query: ({
        endpoint,
        data,
      }: {
        endpoint: keyof typeof AdminUrlEndpoints;
        data: any;
      }) => ({
        url: AdminUrlEndpoints[endpoint],
        method: "POST",
        body: data,
      }),
    }),
    updateData: builder.mutation({
      query: ({
        endpoint,
        id,
        data,
      }: {
        endpoint: keyof typeof AdminUrlEndpoints;
        id: string;
        data: any;
      }) => ({
        url: `${AdminUrlEndpoints[endpoint]}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteData: builder.mutation({
      query: ({
        endpoint,
        id,
      }: {
        endpoint: keyof typeof AdminUrlEndpoints;
        id: string;
      }) => ({
        url: `${AdminUrlEndpoints[endpoint]}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetDataByIdQuery,
  usePostDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} = apiServices;
export default apiServices;
