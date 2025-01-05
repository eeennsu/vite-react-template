import React, { FC } from 'react'

interface Props {
    errorMessage: string
}

const ErrorPage: FC<Props> = ({ errorMessage }) => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='text-center p-6 bg-white rounded-lg shadow-md'>
                <h1 className='text-4xl font-bold text-red-500 mb-4'>Error</h1>
                <p className='text-lg text-gray-700 mb-6'>{errorMessage}</p>
            </div>
        </div>
    )
}

export default ErrorPage
