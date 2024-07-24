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
    createJobDetails: builder.mutation({
      query: (payload) => ({
        url: `/jobs`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["JOB_LIST"],
    }),
    putJobDetails: builder.mutation({
      query: ({id,payload}) => ({
        url: `/jobs/${id}`,
        method: "PUT",
        body:payload
      }),
    }),
  }),
});

export const {
  useGetJobListQuery,
  useGetJobDetailsQuery,
  useDeleteJobDetailsMutation,
  useCreateJobDetailsMutation,
  usePutJobDetailsMutation
} = jobApi;
