import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'
import { shallowEqual } from 'react-redux'
import { useRenderCount } from '@/utils/dev-render-count'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  useRenderCount('HotRecommend')
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />

      <div className="recommend-list">
        {hotRecommends?.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)

//// 多个值时必须用 shallowEqual
//ctrl+shift+L同时对相同内容进行修改
