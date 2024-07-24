import apiWithTag from "./baseApi";

const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => "/employee",
    }),
  }),
});

export const { useGetEmployeeListQuery } = employeeApi;
