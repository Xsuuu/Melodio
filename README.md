# Melodio 音乐流媒体 Web 应用

基于 React 18 的音乐播放器 Web 应用，完整还原核心播放、歌单、排行榜等功能，重点实践性能优化与工程化实践。

## 技术栈

- **框架**: React 18 (App Router 风格组织)
- **语言**: TypeScript
- **构建工具**: Craco (Custom React App Configuration)
- **状态管理**: Redux Toolkit (RTK) + React-Redux
- **UI 组件**: Ant Design (@ant-design/icons)
- **样式方案**: Styled Components + Less + Normalize.css
- **路由**: React Router v7 (兼容 v6 语法)
- **网络请求**: Axios

## 项目亮点

### 1. 组件渲染性能优化（React.memo + shallowEqual）

针对歌单项、推荐子模块等 **30+ 组件**包裹 `React.memo`，Redux selector 配合 `shallowEqual` 避免无效重渲染。在父组件因播放进度频繁更新的场景下，通过 React Profiler 实测，单次 Commit 渲染耗时从 **31ms 降至 13.3ms（↓57%）**，无效重渲染次数由 **50+ 降为 0**。

### 2. 优化首屏资源加载压力

基于 `React.lazy` 与 `Suspense` 实现路由级按需加载，拆分 **11 个异步 chunk**，显著减少非核心页面资源对首页加载的影响，提升 FCP（首次内容绘制）性能。

### 3. 优化弱网场景下首页加载体验

使用低质量占位图（LQIP）提前渲染轮播背景，待原图完成预加载后无感替换，减少用户首次进入时的白屏感。背景图首屏传输体积降低 **93%**，在 Lighthouse 测试下 **CLS（累计布局偏移）保持为 0**。

### 4. 工程化基建

- **Axios 封装**: 统一错误处理、请求/响应拦截与 Restful API 管理。
- **通用组件库**: 自行封装轮播图、Slider 进度条、分类标题等高复用组件，统一设计规范，提升维护效率。

## 功能特性

### 发现音乐 (Discover)

- **多维度推荐**: 动态轮播图、热门歌单、新碟上架、入驻歌手。
- **实时榜单**: 飙升榜、新歌榜、原创榜数据动态展示。
- **模块化导航**: 推荐、排行榜、歌单、电台、歌手、新碟。

### 音频播放器 (Player)

- **核心控制**: 播放/暂停、切歌、音量调节、模式切换（循环/随机）。
- **进度管理**: 实时进度条展示与拖拽跳转。
- **歌词同步**: 歌词实时解析与同步滚动显示。
- **播放列表**: 实时展示并管理待播放曲目。

## 项目结构

```text
src/
├── assets/             # 静态资源 (CSS, 图片, 字体, 本地数据)
├── components/         # 高复用业务组件 (Header, Footer, Item 等)
├── router/             # 路由配置 (React Router)
├── service/            # 网络请求封装 (Axios 拦截器、API 服务)
├── store/              # Redux Toolkit 状态管理模块 (Slice)
├── utils/              # 工具函数 (格式化、歌词解析、图片预加载)
└── views/              # 页面级组件 (Discover, Player, My, Friend 等)
```

## 开发与运行

### 环境要求

- **Node.js**: v18.0.0+ (建议 v20+)
- **包管理器**: npm 或 pnpm

### 安装

```bash
npm install
# 或者
pnpm install
```

### 运行

```bash
# 开发模式
npm start

# 生产构建
npm run build
```
