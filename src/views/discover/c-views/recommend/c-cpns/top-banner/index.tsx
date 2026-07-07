import { Carousel } from 'antd'
import React, { memo, ComponentRef, useRef, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { preloadImage } from '@/utils/preload-image'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  const bannerRef = useRef<ComponentRef<typeof Carousel>>(null)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  const [imageIndex, setImageIndex] = useState(0)
  const [bgUrl, setBgUrl] = useState('')
  const [bgReady, setBgReady] = useState(false)

  function handleBeforeChange(current: number, next: number) {
    setImageIndex(next)
  }

  useEffect(() => {
    const rawUrl = banners?.[imageIndex]?.imageUrl
    if (!rawUrl) {
      setBgUrl('')
      setBgReady(false)
      return
    }

    // 基线模式：Lighthouse 对比用，见 docs/LIGHTHOUSE_GUIDE.md
    const isBaseline = process.env.REACT_APP_BANNER_BASELINE === 'true'
    if (isBaseline) {
      setBgUrl(rawUrl)
      setBgReady(true)
      return
    }

    const blurredUrl = rawUrl + '?imageView&blur=40x20'
    setBgReady(false)
    setBgUrl(blurredUrl)

    let cancelled = false
    preloadImage(blurredUrl)
      .then(() => {
        if (cancelled) return
        setBgReady(true)
        return preloadImage(rawUrl)
      })
      .then((hqUrl) => {
        if (!cancelled && hqUrl) setBgUrl(hqUrl)
      })
      .catch(() => {
        if (!cancelled) setBgReady(true)
      })

    return () => {
      cancelled = true
    }
  }, [banners, imageIndex])

  return (
    <BannerWrapper
      className={bgReady ? 'bg-ready' : 'bg-loading'}
      style={{
        backgroundImage: bgUrl ? `url('${bgUrl}')` : undefined,
        backgroundPosition: 'center center',
        backgroundSize: '6000px'
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            fade={true}
            beforeChange={handleBeforeChange}
            dots={false}
          >
            {banners?.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners?.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === imageIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current?.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}
//?imageView&blur=40x20,?param=140y140
//react和ts结合，要想拿到组件，必须绑定ref,要指定类型

export default memo(TopBanner)
