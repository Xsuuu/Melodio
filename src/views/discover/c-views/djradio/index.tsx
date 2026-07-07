import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Djradio: FC<Iprops> = () => {
  return <div> Djradio </div>
}

export default memo(Djradio)
