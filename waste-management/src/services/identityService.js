/* eslint-disable no-undef */
import { apiSlice } from "../redux/slices/apiSlice";
import { storageService } from "./index";

const extendedApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: JSON.stringify(credentials)
            }),
        }),

        signUp: builder.mutation({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: JSON.stringify(credentials),
            })
        }),

        updateUser: builder.mutation({
            query: (credentials) => {
                const { userId } = storageService.getAuthData()
                console.log(userId)
                return ({
                    url: `/user/updated/${userId}`,
                    method: "PUT",
                    body: JSON.stringify(credentials)
                })
            }

        }),

        async onQueryStarted(_, { queryFulfilled }) {
            try {
                const { data } = await queryFulfilled()
                console.log(data.payload)
                // if (data.endpoint === 'login') {
                //     console.log(data.payload)
                //     storageService.saveAuthData(data.payload);
                // }
            } catch (err) {
                alert('An error occurred. Please try again.')
                console.error(err)
            }
        },
    }),
})

export function logout() {
    storageService.clearCookieData();
    return window.location.replace(import.meta.env.BASE_URL + 'login');
}

export function isAuthenticated() {
    const authData = storageService.getAuthData();
    if (!authData.accessToken) {
        return false;
    } else return true;
}

export const { useLoginMutation, useSignUpMutation, useUpdateUserMutation } = extendedApi
