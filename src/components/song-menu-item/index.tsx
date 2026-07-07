import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/format'
import { useRenderCount } from '@/utils/dev-render-count'

interface Iprops {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: FC<Iprops> = (props) => {
  const { itemData } = props
  useRenderCount('SongMenuItem')

  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="buttom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
