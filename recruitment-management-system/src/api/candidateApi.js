import apiWithTag from "./baseApi";

const candidateApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getCandidateDetails: builder.query({
            query: (email) => `/candidates/email/${email}`,
        })
    })
})

export const { useGetCandidateDetailsQuery } = candidateApi