import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Template: FC<Iprops> = () => {
  return <div> Template </div>
}

export default memo(Template)

//类组件
