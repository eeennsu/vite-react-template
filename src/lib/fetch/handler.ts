import { AxiosRequestConfig } from 'axios'
import { axiosInstance } from './axios'

export const fetchHandler = async <T extends Record<string, any>>({
    url,
    method,
    body,
    options,
}: {
    url: string
    method: 'get' | 'post' | 'put' | 'patch' | 'delete'
    body?: any
    options?: AxiosRequestConfig
}) => {
    const response = await axiosInstance[method]<T>(url, body, options)

    return response.data
}
