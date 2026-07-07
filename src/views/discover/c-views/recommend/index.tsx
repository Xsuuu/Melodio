import { useAppDispatch, useAppSelector } from '@/store'
import { Skeleton } from 'antd'
import React, { memo, useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import type { FC, ReactNode } from 'react'
import {
  fetchRankingDataAction,
  // fetchBannerDataAction,
  // fetchHotRecommendAction,
  // fetchNewAlbumAction,
  fetchRecommendDataAction
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface Iprops {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  const dispatch = useAppDispatch()
  const { banners, hotRecommends } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners,
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )
  const isPageLoading = banners.length === 0 && hotRecommends.length === 0

  useEffect(() => {
    // dispatch(fetchBannerDataAction())
    // dispatch(fetchHotRecommendAction())
    // dispatch(fetchNewAlbumAction())
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  }, [])

  if (isPageLoading) {
    return (
      <RecommendWrapper>
        <Skeleton active paragraph={{ rows: 16 }} />
      </RecommendWrapper>
    )
  }

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
