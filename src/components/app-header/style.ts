import theme from '@/assets/theme'
import { Modal } from 'antd'
import styled from 'styled-components'

//类型声明：
// 1.ts内置DOM
// 2.第三方：*库内部已经有类型声明(axios)
// *react/react-dom => @type/react @types/reactd-dom
// *自己写类型声明，比如lodash

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;

    ${theme.mixin.wrapv1};
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .title-list {
    display: flex;
    line-height: 70px;

    .item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      &:last-of-type a {
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  > .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    color: #c5c3c3;
    cursor: pointer;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }

  .login {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const CustomModal = styled(Modal)`
  --ant-modal-content-padding: 0px !important;
  .ant-modal-body {
    padding: 0 !important;
  }
`

/* Modal 整体 */
export const StyledLoginModal = styled.div`
  .ant-modal {
    width: 520px !important; /* Modal 宽度 */
    padding: 0;
  }

  .ant-modal-title {
    font-size: 18px;
    font-weight: 600;
  }

  .ant-modal-close {
    top: 16px;
    right: 16px;
  }

  .ant-modal-body {
    padding: 0;
  }
`

export const Header = styled.div`
  width: 100%;
  font-size: 8px;
  background-color: #222222;

  h1 {
    padding: 10px;
    padding-left: 15px;
    color: #f8f8f8;
    cursor: pointer;
  }
`

/* 主内容布局 */
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/* 左侧手机预览图 */
export const LeftPreview = styled.div`
  width: 180px;
  height: 280px; /* 调整高度，接近原图比例 */
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding: 20px;

  img {
    padding-top: 30px;
    padding-left: 60px;
    width: 75%;
    height: 75%;
    object-fit: cover;
    display: block;
    border-radius: 10%;
  }
`

/* 右侧二维码区域 */
export const QRSection = styled.div`
  margin-right: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 32px;
  padding: 20px;
`

/* 扫码标题 */
export const QRTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`

/* 二维码容器 */
export const QRBox = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`

/* 扫码说明 */
export const QRDesc = styled.div`
  font-size: 12px;
  text-align: center;

  a {
    color: #458bcd;
    cursor: pointer;
  }
  margin-bottom: 16px;
`

/* 底部区域 */
export const Footer = styled.div`
  width: 100%;
  padding: 18px 0;
  font-size: 12px;
  color: #666;
  text-align: center;
  background-color: #f8f8f8;

  span {
    color: #458bcd;
  }
`

//``这是 JavaScript 的模板字符串（Template Literals） 语法。
// styled.div 是一个函数，它接收模板字符串作为参数
//styled.div`CSS代码`,等价于：styled.div(`CSS代码`)
