import apiWithTag from "./baseApi";

const loginApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: "/employee/login",
                method: "POST",
                body: payload
            })
        })
    })
})

export const { useLoginMutation } = loginApi