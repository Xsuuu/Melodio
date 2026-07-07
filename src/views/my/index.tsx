import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const My: FC<Iprops> = () => {
  return <div> My </div>
}

export default memo(My)
