import { fetchHandler } from '@/lib/fetch/handler'
import { AuthLicense } from './auth.model'
import { axiosInstance } from '@/lib/fetch/axios'
import { AxiosError, isAxiosError } from 'axios'

export const requestSignUp = async (body: { id: string; pw: string; name: string; license: AuthLicense }) => {
    try {
        return await fetchHandler({
            url: '/auth/signup',
            method: 'post',
            body,
        })
    } catch (error: any) {
        if (isAxiosError(error) && error.response) {
            return {
                code: error.response.data?.code,
            }
        } else {
            return {}
        }
    }
}

export const requestLogin = async (body: { id: string; pw: string }) => {
    try {
        return await fetchHandler<UserMeResponse>({
            url: '/auth/login',
            method: 'post',
            body,
        })
    } catch (error) {
        return {
            id: '',
            name: '',
            license: 0 as AuthLicense | 0,
        } as UserMeResponse
    }
}

export const requestLogout = async () => {
    try {
        return await axiosInstance.post('/auth/logout')
    } catch (error: any) {
        if (error.response.status === 403) {
            console.log('??')
            return {
                code: error.response.data.code,
            }
        }

        return {}
    }
}

export const requestRefreshToken = async () => {
    return await axiosInstance.post('/auth/refresh')
}

export const requestNeedAuth = async () => {
    try {
        return await fetchHandler<{ message: string }>({
            url: '/auth/need-auth',
            method: 'get',
        })
    } catch (error) {
        return {
            message: '',
        } as { message: string }
    }
}

export const requestTest = async () => {
    try {
        return await fetchHandler({
            url: '/',
            method: 'get',
        })
    } catch (error) {
        return {}
    }
}

export const requestUserMe = async () => {
    try {
        return await fetchHandler<UserMeResponse>({
            url: '/auth/me',
            method: 'get',
        })
    } catch (error) {
        return {
            id: '',
            name: '',
            license: 0 as AuthLicense | 0,
        } as UserMeResponse
    }
}
