// //index.tsx

// import React, { memo } from 'react'
// //memo 是 React 提供的性能优化方法，用来缓存组件，避免不必要的重新渲染。
// import type { ReactNode, FC } from 'react'
// //只导入类型，不导入值.编译后完全删除，不影响最终打包大小

// interface Iprops {
//   // children?: any
//   children?: ReactNode

//   //如果想要换入children添加这行语句
//   //但是传入的并不是any，而是react.element
//   //让我们自己传children的原因是，做一个约束，别人未经定义就传入children就报错
//   name: string
//   age: number
//   height?: number
// }
// //这是 TypeScript 的类型系统，不是 JavaScript 的普通对象。

// //直接对props进行约束
// const Download = (props: Iprops) => {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//       <div>age: {props.age}</div>
//       <div>height: {props.height}</div>
//       <div>children: {props.children}</div>
//     </div>
//   )
// }

// //FC: FunctionComponent的缩写，格式化上下文
// // const Download: FC<Iprops> = (props) => {
// //   return (
// //     <div>
// //       <div>name: {props.name}</div>
// //       <div>age: {props.age}</div>
// //       <div>height: {props.height}</div>
// //     </div>
// //   )
// // }

// Download.defaultProps = {
//   height: 1.88
// }

// // Download.displayName = '修改名字'
// //改名字

// //前者不报错，后者报错
// //这是 TypeScript 的一个历史遗留问题。虽然能运行，
// // 但 TypeScript 无法自动识别 defaultProps 中定义的默认值。
// //在 React 18 中，React.FC 类型不再包含 defaultProps，
// // 所以 TypeScript 无法提供自动补全

// export default memo(Download)
// //memo

// //App.tsx

// // import { useRoutes } from 'react-router-dom'
// // import routes from './router'
// // import Download from './views/download'

// // function App() {
// //   return (
// //     <div className="App">
// //       <Download name="why" age={18}>
// //         <div>我是children</div>
// //         <span>我爱洗澡</span>
// //         chilllllllllllld
// //       </Download>
// //       {useRoutes(routes)}
// //     </div>
// //   )
// //   //组件内部不允许再另外写东西了，因为react更新后已经没有children属性了
// // }
