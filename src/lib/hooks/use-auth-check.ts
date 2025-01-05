import { requestUserMe, useAuthStore } from '@/entities/auth'
import { useEffect, useState } from 'react'

export const useAuthCheck = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { setAuth, setIsLogin } = useAuthStore()

    useEffect(() => {
        requestUserMe()
            .then(async (res) => {
                if (res.id && res.name && res.license) {
                    setAuth({
                        id: res.id,
                        name: res.name,
                        license: res.license,
                    })

                    setIsLogin(true)
                }
            })
            .catch(() => {
                console.log('User Me Error')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return { isLoading }
}
