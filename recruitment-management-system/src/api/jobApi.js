import apiWithTag from "./baseApi";

const jobApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getJobList: builder.query({
      query: () => "/jobs",
      providesTags: ["JOB_LIST"],
    }),
    getJobDetails: builder.query({
      query: (id) => `/jobs/${id}`,
    }),
    deleteJobDetails: builder.mutation({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetJobListQuery,
  useGetJobDetailsQuery,
  useDeleteJobDetailsMutation,
} = jobApi;
