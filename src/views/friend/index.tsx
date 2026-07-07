import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Friend: FC<Iprops> = () => {
  return <div> Friend </div>
}

export default memo(Friend)
