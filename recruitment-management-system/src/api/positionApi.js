import apiWithTag from "../api/baseApi.js";

export const positionApi = apiWithTag.injectEndpoints({
	endpoints: (builder) => ({
		getPositionList: builder.query({
			query: () => "/position",
			providesTags: ["POSITION_LIST"],
		}),
		// getEmployeeDetails: builder.query({
		// 	query: (id) => `/employees/${id}`,
		// }),
		addPosition: builder.mutation({
			query: (body) => ({
				url: "/position",
				method: "POST",
				body,
			}),
			invalidatesTags: ["POSITION_LIST"],
		}),
		// updateEmployee: builder.mutation({
		// 	query: (body) => ({
		// 		url: `/employees/${body.employeeId}`,
		// 		method: "PUT",
		// 		body,
		// 	}),
		// 	invalidatesTags: ["EMPLOYEE_LIST"],
		// }),
		// deleteEmployee: builder.mutation({
		// 	query: (id) => ({
		// 		url: `/employees/${id}`,
		// 		method: "DELETE",
		// 	}),
		// 	invalidatesTags: ["EMPLOYEE_LIST"],
		// }),
	}),
});

export const { useGetPositionListQuery, useAddPositionMutation } = positionApi;
