import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Toplist: FC<Iprops> = () => {
  return <div> Toplist </div>
}

export default memo(Toplist)
