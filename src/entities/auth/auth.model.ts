import { create } from 'zustand'

export type AuthLicense = 1 | 2 | 3 | 4

interface Auth {
    id: string
    name: string
    license: 0 | AuthLicense
}

interface AuthState {
    auth: Auth
    isLogin: boolean
    setAuth: (user: Auth) => void
    setIsLogin: (isLogin: boolean) => void
}

export const defaultAuth: Auth = {
    id: '',
    name: '',
    license: 0,
}

export const useAuthStore = create<AuthState>((set) => ({
    auth: defaultAuth,
    isLogin: false,
    setAuth: (user: Auth) => set(() => ({ auth: user })),
    setIsLogin: (isLogin: boolean) => set(() => ({ isLogin })),
}))

export const resetAuth = () => {
    useAuthStore.setState({ auth: defaultAuth, isLogin: false })
}
