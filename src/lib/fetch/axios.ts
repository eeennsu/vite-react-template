import { requestLogout, requestRefreshToken, resetAuth } from '@/entities/auth'
import axios from 'axios'
import { ERROR_CODE } from '../error/api-error-code'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: process.env.NODE_ENV === 'development' ? 10000 : 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            try {
                // 중복 로그인
                if (error.response.status === 403 && error.response.data.code === ERROR_CODE.TOKEN_BLACKLISTED.code) {
                    resetAuth()
                    alert('다른 기기에서 로그인하여 로그아웃되었습니다.')

                    return Promise.reject(error)
                }

                const refreshResponse = await requestRefreshToken()

                // refresh token이 없을 때는 그냥 로그아웃하자
                if (refreshResponse.status === 204) {
                    resetAuth()

                    return Promise.reject(error)
                } else if (refreshResponse.status === 200) {
                    return axiosInstance.request(error.config)
                }
            } catch (error) {
                console.error('Refresh Token Error:', error)
                await requestLogout()
                resetAuth()
            }
        }

        return Promise.reject(error)
    }
)
