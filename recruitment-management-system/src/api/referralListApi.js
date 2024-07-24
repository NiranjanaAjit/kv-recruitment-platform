import apiWithTag from "./baseApi";

const referralApi = apiWithTag.injectEndpoints({
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

export const { useReferralQuery } = referralApi;
