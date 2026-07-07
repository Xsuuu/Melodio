import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  HeaderLeft,
  Header,
  HeaderRight,
  HeaderWrapper,
  CustomModal
} from './style'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { Flex, Input, Button, Modal, QRCode, Space, ConfigProvider } from 'antd'

import HeaderTitles from '@/assets/data/header-titles.json'
import scanQR from '@/assets/img/scanQR.png'
import theme from '@/assets/theme'

// 假设 style.ts 在同目录下
import {
  StyledLoginModal,
  ContentWrapper,
  LeftPreview,
  QRSection,
  QRTitle,
  QRBox,
  QRDesc,
  Footer
} from './style'

interface Iprops {
  children?: ReactNode
}

//使用styled-components，非常灵活

const AppHeader: FC<Iprops> = () => {
  // const [currentIndex, setCurrentIndex] = useState(0)
  //一刷新就没有了，所有不能用这个方式

  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          // className={({ isActive }) => (isActive ? 'actttttttt' : undefined)}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
      //NavLink相较于Link是有active状态的,多了个class
      //可以自己调名称，默认是active
    } else {
      return (
        <a target="_blank" href={item.link} rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const [text, setText] = React.useState(
    'https://qrstyle-api.cli.im/create/createOne?params_data=%255B%257B%2522web_url%2522%253A%2522https%253A%255C%252F%255C%252Fqr61.cn%255C%252FoZKXij%255C%252FqOZ8OxE%2522%252C%2522qr_name%2522%253A%2522%2525E5%2525BE%2525AE%2525E4%2525BF%2525A1%2525E5%25259B%2525BE%2525E7%252589%252587_20260331212352_536_2.jpg%2522%257D%255D&code_tplid=393439165&code_type=1&time=1774964496&uid=114751880&publickey=61dac11cdd52c63cdd4f09fc621b3324&label_tplid=171'
  )

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {HeaderTitles?.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <a href="https://music.163.com/#/creatorcenter">
            <div className="center">创作者中心</div>
          </a>
          <div className="login" onClick={showModal}>
            登录
          </div>
          <StyledLoginModal>
            <CustomModal
              title=""
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null}
              closeIcon={
                <CloseOutlined
                  style={{
                    color: '#f8f8f8',
                    fontSize: '14px',
                    paddingBottom: '10px'
                  }}
                />
              }
            >
              <Header>
                <h1>登录</h1>
              </Header>
              <ContentWrapper>
                <LeftPreview>
                  <img src={scanQR}></img>
                </LeftPreview>

                {/* 右侧二维码区域 */}
                <QRSection>
                  <QRTitle>扫码登录</QRTitle>

                  <QRBox>
                    <QRCode value={text || '-'} size={160} />
                  </QRBox>

                  <QRDesc>
                    使用{' '}
                    <Link to="./download" onClick={handleCancel}>
                      网易云音乐APP
                    </Link>{' '}
                    扫码登录
                  </QRDesc>
                </QRSection>
              </ContentWrapper>

              <Footer>
                <span>下载客户端，VIP歌曲免费听</span>
              </Footer>
            </CustomModal>
          </StyledLoginModal>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}
//_blank在本页dak

export default memo(AppHeader)
