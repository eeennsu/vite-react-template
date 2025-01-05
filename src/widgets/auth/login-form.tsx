import { AuthLicense, requestLogin, requestRefreshToken, useAuthStore } from '@/entities/auth'
import { FC } from 'react'

export const LoginForm: FC = () => {
    const { setIsLogin, setAuth } = useAuthStore()

    const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = {
            id: formData.get('id') as string,
            pw: formData.get('password') as string,
        }

        try {
            const response = await requestLogin(data)

            setIsLogin(Boolean(response.id && response.name && response.license))
            setAuth({
                id: response.id,
                name: response.name,
                license: response.license as AuthLicense | 0,
            })
        } catch (error) {
            console.error('Log In Error:', error)
        }
    }

    return (
        <div className='w-full max-w-md p-6 bg-white shadow-md rounded-md'>
            <h1 className='text-2xl font-bold text-center mb-6'>Log In</h1>
            <form
                onSubmit={handleLoginSubmit}
                className='space-y-4'
            >
                <div>
                    <label
                        htmlFor='login-id'
                        className='block text-sm font-medium text-gray-700'
                    >
                        ID
                    </label>
                    <input
                        type='text'
                        name='id'
                        id='login-id'
                        required
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                        defaultValue={'diso592'}
                        autoComplete='username'
                    />
                </div>
                <div>
                    <label
                        htmlFor='login-password'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        id='login-password'
                        required
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                        autoComplete='current-password'
                        defaultValue={'tyukk3467'}
                    />
                </div>
                <button
                    type='submit'
                    className='w-full py-2 px-4 text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                >
                    Log In
                </button>
            </form>
        </div>
    )
}
