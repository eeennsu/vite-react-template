import { requestSignUp } from '@/entities/auth/auth.api'
import { ERROR_CODE } from '@/lib/error/api-error-code'
import { FC } from 'react'

export const SignUpForm: FC = () => {
    const handleSignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = {
            id: formData.get('id') as string,
            name: formData.get('name') as string,
            license: parseInt(formData.get('license') as string, 10) as 1 | 2 | 3 | 4,
            pw: formData.get('password') as string,
        }

        try {
            const response = await requestSignUp(data)

            if (response?.code === ERROR_CODE.REQUIRED_FIELD.code) {
                alert('필수 입력 항목을 모두 입력해주세요.')
                return
            }

            alert('회원가입이 완료되었습니다.')
        } catch (error) {
            console.error('Sign Up Error:', error)
        }
    }

    return (
        <div className='w-full max-w-md p-6 bg-white shadow-md rounded-md'>
            <h1 className='text-2xl font-bold text-center mb-6'>Sign Up</h1>
            <form
                onSubmit={handleSignUpSubmit}
                className='space-y-4'
            >
                <div>
                    <label
                        htmlFor='signup-id'
                        className='block text-sm font-medium text-gray-700'
                    >
                        ID
                    </label>
                    <input
                        type='text'
                        name='id'
                        id='signup-id'
                        required
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                </div>
                <div>
                    <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        required
                        autoComplete='new-password'
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                </div>
                <div>
                    <label
                        htmlFor='license'
                        className='block text-sm font-medium text-gray-700'
                    >
                        License (1 ~ 4)
                    </label>
                    <select
                        name='license'
                        id='license'
                        required
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor='signup-password'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        id='signup-password'
                        required
                        autoComplete='new-password'
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                </div>
                <button
                    type='submit'
                    className='w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}
