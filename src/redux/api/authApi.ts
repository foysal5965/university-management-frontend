import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (logInData) => ({
                url: '/auth/login',
                method: "POST",
                data: logInData
            }),
            invalidatesTags: [tagTypes.user]
        }),
    }),
    overrideExisting: false,
})
export const { useUserLoginMutation } = authApi

