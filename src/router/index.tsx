import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import Layout from '../pages/layout/index'
//路由懒加载
const Login = lazy(() => import('../pages/login'))
const FindPass = lazy(() => import('../pages/findPass'))
const Home = lazy(() => import('../pages/home'))
const My = lazy(() => import('../pages/my'))
const Welfare = lazy(() => import('../pages/welfare'))
const WelfareDetail = lazy(() => import('../pages/welfare/detail'))
const Wallet = lazy(() => import('../pages/wallet'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: '/welfare',
        element: <Welfare />,
      },
      {
        path: '/wallet',
        element: <Wallet />,
      },
      {
        path: '/my',
        element: <My />,
      },
    ]
  },
  {
    path: '/welfareDetail',
    element: <WelfareDetail />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/findPass',
    element: <FindPass />
  },
]
export default routes