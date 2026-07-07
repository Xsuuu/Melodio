/**
 * Baseline router without lazy loading — used only for build size comparison.
 * See scripts/measure-build.mjs
 */
import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Discover from '@/views/discover'
import My from '@/views/my'
import Friend from '@/views/friend'
import Download from '@/views/download'
import Recommend from '@/views/discover/c-views/recommend'
import Toplist from '@/views/discover/c-views/toplist'
import Playlist from '@/views/discover/c-views/playlist'
import Djradio from '@/views/discover/c-views/djradio'
import Artist from '@/views/discover/c-views/artist'
import Album from '@/views/discover/c-views/album'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
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
