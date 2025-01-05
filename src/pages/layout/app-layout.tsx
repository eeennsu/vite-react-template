import { useAuthCheck } from '@/lib/hooks/use-auth-check'
import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout: FC = () => {
    const { isLoading } = useAuthCheck()

    return !isLoading && <Outlet />
}
