import { Carousel } from 'antd'
import React, { memo, useRef } from 'react'
import type { ComponentRef, FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { CarouselRef } from 'antd/es/carousel'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import NewAlbumItem from '@/components/new-album-item'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  const bannerRef = useRef<ComponentRef<typeof Carousel>>(null)
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  )
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => bannerRef.current?.prev()}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={2000}>
            {[0, 1]?.map((item) => {
              //css样式无法覆盖内联样式，所以多嵌套一层
              return (
                <div key={item}>
                  <div className="album-list" key={item}>
                    {newAlbums
                      ?.slice(item * 5, (item + 1) * 5)
                      .map((album: any) => {
                        return <NewAlbumItem key={album.id} itemData={album} />
                      })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => bannerRef.current?.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
