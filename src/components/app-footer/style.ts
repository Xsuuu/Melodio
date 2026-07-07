import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 325.8px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  background-color: rgb(242, 242, 242);
  color: #666;
  border-top: 1px solid #d3d3d3;

  .iconlist {
    width: 980px;
    margin: 33px auto 0;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .icon {
      width: 100px;
      height: 130px;

      &:hover {
        a {
          &.icon1 {
            background-position: 0px -600px;
          }
          &.icon2 {
            background-position: -120px -600px;
          }
          &.icon3 {
            background-position: 0px -700px;
          }
          &.icon4 {
            background-position: -120px -700px;
          }
          &.icon5 {
            background-position: 0px -800px;
          }
          &.icon6 {
            background-position: -120px -800px;
          }
        }
        span {
          &.name1 {
            background-position: 0px 0px;
          }
          &.name2 {
            background-position: 0px -40px;
          }
          &.name3 {
            background-position: 0px -80px;
          }
          &.name4 {
            background-position: 0px -120px;
          }
          &.name5 {
            background-position: 0px -160px;
          }
          &.name6 {
            background-position: 0px -200px;
          }
        }
      }

      a {
        margin-left: 6px;
        display: block;
        height: 88px;
        width: 88px;
        text-align: center;

        &.icon1 {
          background-position: 0px 0px;
        }
        &.icon2 {
          background-position: -120px 0px;
        }
        &.icon3 {
          background-position: 0px -100px;
        }
        &.icon4 {
          background-position: -120px -100px;
        }
        &.icon5 {
          background-position: 0px -200px;
        }
        &.icon6 {
          background-position: -120px -200px;
        }
      }
      span {
        display: inline-block;
        width: 98px;
        height: 20px;
        text-align: center;
        margin-top: 20px;

        &.name1 {
          background-position: -120px 0px;
        }
        &.name2 {
          background-position: -120px -40px;
        }
        &.name3 {
          background-position: -120px -80px;
        }
        &.name4 {
          background-position: -120px -120px;
        }
        &.name5 {
          background-position: -120px -160px;
        }
        &.name6 {
          background-position: -120px -200px;
        }
      }
    }
  }

  .descriptions {
    height: 100.4px;
    align-items: center;
    justify-content: space-around;
    line-height: 24px;
    text-align: center;
    margin-top: 60px;

    .policy {
      height: 24px;

      .item {
        position: relative;
        top: 2px;
        display: inline;

        .link {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .divider {
          margin: 0 15px;
          color: #ccc;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }

    .report {
      height: 24px;
    }

    .record {
      height: 28.4px;

      .police-logo {
        width: 19px;
        height: 19px;
        background-position: 0px 0px;
      }

      .police-description {
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`
