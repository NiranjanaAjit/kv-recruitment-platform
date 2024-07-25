import apiWithTag from "./baseApi";

const notificationApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (payload) => "/notifications",
      providesTags: ["NOTIFICATION_LIST"],
      body:payload,
      keepUnusedDataFor: 2,
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
