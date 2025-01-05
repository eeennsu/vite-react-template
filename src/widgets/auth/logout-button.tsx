import { requestLogout, resetAuth } from '@/entities/auth'
import { ERROR_CODE } from '@/lib/error/api-error-code'
import { FC } from 'react'

export const LogoutButton: FC = () => {
    const handleLogout = async () => {
        const response = (await requestLogout()) as any

        if (response.code !== ERROR_CODE.TOKEN_BLACKLISTED.code) {
            alert('로그아웃 성공!')
            resetAuth()
        }
    }

    return (
        <button
            onClick={handleLogout}
            className='px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700'
        >
            Log Out
        </button>
    )
}
