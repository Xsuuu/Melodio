import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const AppFooter: FC<Iprops> = () => {
  const keywords = [
    '服务条款',
    '隐私政策',
    '儿童隐私政策',
    '版权投诉',
    '投资者关系',
    '广告合作',
    '联系我们'
  ]
  return (
    <FooterWrapper>
      <ul className="iconlist">
        <li className="icon">
          <a href="" className="sprite_footer_02 icon1"></a>
          <span className="sprite_footer_01 name1"></span>
        </li>
        <li className="icon">
          <a href="" className="sprite_footer_02 icon2"></a>
          <span className="sprite_footer_01 name2"></span>
        </li>
        <li className="icon">
          <a href="" className="sprite_footer_02 icon3"></a>
          <span className="sprite_footer_01 name3"></span>
        </li>
        <li className="icon">
          <a href="" className="sprite_footer_02 icon4"></a>
          <span className="sprite_footer_01 name4"></span>
        </li>
        <li className="icon">
          <a href="" className="sprite_footer_02 icon5"></a>
          <span className="sprite_footer_01 name5"></span>
        </li>
        <li className="icon">
          <a href="" className="sprite_footer_02 icon6"></a>
          <span className="sprite_footer_01 name6"></span>
        </li>
      </ul>
      <div className="descriptions">
        <div className="policy">
          {keywords?.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
        <div className="report">
          <a href="">廉正举报</a>
          &nbsp;&nbsp;&nbsp;&nbsp;不良信息举报邮箱: 51jubao@service.netease.com
        </div>
        <div className="permission">
          互联网宗教信息服务许可证：浙（2022）0000120
          增值电信业务经营许可证：浙B2-20150198{' '}
          <a href="">
            粤B2-20090191-18 浙ICP备15006616号-4 工业和信息化部备案管理系统网站
          </a>
        </div>
        <div className="record">
          网易公司版权所有©1997-2026
          &nbsp;&nbsp;&nbsp;杭州乐读科技有限公司运营：
          <a href="">浙网文[2024] 0900-042号</a>&nbsp;&nbsp;
          <button className="police police-logo"></button>
          <span className="police-description">
            &nbsp;浙公网安备 33010802013307号 算法服务公示信息{' '}
          </span>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
