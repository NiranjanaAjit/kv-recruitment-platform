import apiWithTag from "./baseApi";

const notificationApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => "/notifications",
      providesTags: ["NOTIFICATION_LIST"],
    }),
  }),
});

export const {
  useGetNotificationsQuery
} = notificationApi;
