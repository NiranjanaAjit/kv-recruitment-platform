import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("accessToken")
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    endpoints: () => ({})
})

const apiWithTag = baseApi.enhanceEndpoints({
    addTagTypes: ["JOB_LIST"]
})

export default apiWithTag