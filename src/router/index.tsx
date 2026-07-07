import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// import Discover from '@/views/discover'
// import My from '@/views/my'
// import Friend from '@/views/friend'
// import Download from '@/views/download'

//useNavigate是一个hook，hook会返回函数，函数会帮忙导航
//const navigate = useNavigate()
//navigate()

//分包处理:import()函数，在路由中专业词汇叫做路由的懒加载(组件)
const Discover = lazy(() => import('@/views/discover'))
const My = lazy(() => import('@/views/my'))
const Friend = lazy(() => import('@/views/friend'))
const Download = lazy(() => import('@/views/download'))

const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Toplist = lazy(() => import('@/views/discover/c-views/toplist'))
const Playlist = lazy(() => import('@/views/discover/c-views/playlist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

//再在App.tsx对route进行suspence包裹

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
    //.ts文件里面不能包含jsx语法，所以要改成.tsx文件
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/toplist',
        element: <Toplist />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
    //添加二级路由
    //没有必要做动态路由，动态路由是用来做权限管理的
    //jsx中作为属性的value时用双引号，属性一般推荐用双引号，js代码就用单引号
    //React中二级路由用<Outlet />来占位
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/download',
    element: <Download />
  }
]
export default routes
