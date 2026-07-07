import styled from 'styled-components'
import theme from '@/assets/theme'

export const NavWrapper = styled.div`
  height: 30px;
  background-color: ${theme.color.primary};
  // 因为 theme 在组件外部，但实际渲染时可能被 ThemeProvider 覆盖
  //正确方式 - 通过 props 获取

  .nav {
    display: flex;
    padding-left: 180px;
    position: relative;
    top: -4px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
