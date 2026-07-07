import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface Iprops {
  children?: ReactNode
}

const Discover: FC<Iprops> = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
  //本质是React.createElement()，所以必须导入react
}

export default memo(Discover)
