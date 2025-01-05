import type { FC } from 'react'
import { requestNeedAuth } from '@/entities/auth'
import { useMutation } from '@tanstack/react-query'
import { LogoutButton } from '@/widgets/auth'

export const LoggedPage: FC = () => {
    const { mutateAsync: mutateNeedAuth } = useMutation({
        mutationFn: requestNeedAuth,
    })

    const handleProtectedAction = () => {
        mutateNeedAuth().then((res) => {
            if (res?.message) {
                alert('너는 로그인된 사용자구나!')
            }
        })
    }

    return (
        <section className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <h1 className='text-2xl font-bold mb-8 text-gray-800'>Welcome to the Logged Page</h1>
            <div className='flex flex-col items-center space-y-4'>
                <button
                    onClick={handleProtectedAction}
                    className='px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
                >
                    Perform Protected Action
                </button>
                <LogoutButton />
            </div>
        </section>
    )
}
