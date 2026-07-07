import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'
import { shallowEqual } from 'react-redux'

interface Iprops {
  children?: ReactNode
}

const TopRanking: FC<Iprops> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    shallowEqual
  )
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/toplist" />
      <div className="content">
        {rankings?.map((item: any) => {
          return <TopRankingItem key={item?.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
