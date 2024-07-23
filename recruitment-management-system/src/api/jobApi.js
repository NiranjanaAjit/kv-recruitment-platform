import apiWithTag from "./baseApi";

const jobApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getJobList: builder.query({
            query: () => "/jobs",
            providesTags: ["JOB_LIST"]
        }),
        getJobDetails: builder.query({
            query: (id) => `/jobs/${id}`
        })
    })
})

export const { useGetJobListQuery, useGetJobDetailsQuery } = jobApi