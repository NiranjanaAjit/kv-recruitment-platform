import apiWithTag from "./baseApi";

const loginApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    referral: builder.query({
      query: (payload) => ({
        url: "/referrals",
        method: "GET",
        body: payload,
      }),
    }),
  }),
});

export const { useReferralQuery } = loginApi;
