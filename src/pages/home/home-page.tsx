import { useAuthStore } from '@/entities/auth'
import { LoginForm, SignUpForm } from '@/widgets/auth'
import { FC } from 'react'
import { LoggedPage } from './logged-page'

export const HomePage: FC = () => {
    const { isLogin } = useAuthStore()

    return (
        <main className='flex flex-col items-center justify-center min-h-screen space-y-8  mx-auto'>
            <h1 className='text-4xl font-bold'>Welcome to Your App</h1>
            {isLogin ? (
                <LoggedPage />
            ) : (
                <>
                    <SignUpForm />
                    <LoginForm />
                </>
            )}
        </main>
    )
}
