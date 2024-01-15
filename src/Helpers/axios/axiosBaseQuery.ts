import { IMeta } from '@/types'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosRequestConfig, AxiosError } from 'axios'
import { instance } from './instance'

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      meta?: IMeta
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers']
      contentType?: string
    },
    unknown,
    unknown
  > =>
    async ({ url, method, data, params, contentType }) => {
      try {
        const result = await instance({
          url: baseUrl + url, method, data, params, headers: {
            contentType: "application/json" || contentType
          }
        })
        return { data: result.data }
      } catch (axiosError) {
        const err = axiosError as AxiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        }
      }
    }

