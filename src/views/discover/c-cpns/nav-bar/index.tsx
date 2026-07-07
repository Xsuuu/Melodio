import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local-data'
import { NavLink } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
}

const NavBar: FC<Iprops> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu?.map((item) => {
          return (
            <div className="item" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
          //少了个key所以报错
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
