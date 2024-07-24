import apiWithTag from "./baseApi";

const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => "/employee",
      providesTags: ["EMPLOYEE_LIST"],
    }),
    getEmployeeListById: builder.query({
      query: ({ id }) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
    }),
    editEmployeeList: builder.mutation({
      query: ({ id: id, payload: payload }) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
    postEmployeeList: builder.mutation({
      query: (payload) => ({
        url: `/employee`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
    deleteEmployeeListById: builder.mutation({
      query: (payload) => ({
        url: `/employee/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});

export const {
  useGetEmployeeListQuery,
  useEditEmployeeListMutation,
  useGetEmployeeListByIdQuery,
  usePostEmployeeListMutation,
  useDeleteEmployeeListByIdMutation,
} = employeeApi;
