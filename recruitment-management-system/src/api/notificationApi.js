import apiWithTag from "./baseApi";

const notificationApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => "/notifications",
      providesTags: ["NOTIFICATION_LIST"],
      keepUnusedDataFor: 2,
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
