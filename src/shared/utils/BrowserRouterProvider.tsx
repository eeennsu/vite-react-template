import HomePage from '@/pages/home/home-page';
import AppLayout from '@/pages/layout/app-layout';
import { FC, PropsWithChildren } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

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
];

const BrowserRouterProvider = () => {
  return <RouterProvider router={createBrowserRouter(routerArray)} />;
};

export default BrowserRouterProvider;
