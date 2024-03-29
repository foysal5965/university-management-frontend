import { axiosBaseQuery } from '@/Helpers/axios/axiosBaseQuery'
import { getBaseUrl } from '@/Helpers/config/envConfig'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'Api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes:tagTypesList
})

