import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import { ThemeProvider } from 'styled-components'

import './assets/css/index.less'

import App from '@/App'
import store from './store'
import theme from './assets/theme'
import reportWebVitals from './reportWebVitals'

//@指的是src的别名
//因为react是基于webpack，webpack的配置是隐藏的，有两种方式：
// 1.eject暴露出来(但是危险。不建议)
// 2.craco:create-react-app config修改后的配置和原来webpack的配置进行合并

//npm install -D @craco/craco
//项目根目录下创建craco.config.js
//模版见文件
//ts检测不通过，去tsconfig.json配置baseUrl和paths
//package.json改scripts中出来eject，都改成craco ***

//代码规范，见项目搭建和接口文档.md

//npx命令可以在bin目录下面找对应的命令

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)

reportWebVitals((metric) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[web-vitals] ${metric.name}:`, Math.round(metric.value))
  }
})
