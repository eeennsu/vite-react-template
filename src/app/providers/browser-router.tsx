import { HomePage } from '@/pages/home'
import { AppLayout } from '@/pages/layout/app-layout'
import { FC, PropsWithChildren } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

const routerArray: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
]

export const BrowseRouterProvider: FC<PropsWithChildren> = ({ children }) => {
    return <RouterProvider router={createBrowserRouter(routerArray)} />
}
