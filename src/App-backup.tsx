// import React, { Suspense } from 'react'
// import routes from './router'
// import { useRoutes } from 'react-router-dom'

// // import { IRootState } from './store'
// import { useAppSelector, useAppDispatch, appShallowEqual } from './store'
// import { changeMessage } from './store/modules/counter'
// import AppHeader from './components/app-header'
// import AppFooter from './components/app-footer'
// // import Demo from './views/demo'
// // import { Demo02 } from './views/demo/demo02'

// import { Button, Flex } from 'antd'

// // type GetStateFnType = typeof store.getState
// // type IRootState = ReturnType<GetStateFnType>
// //先拿到state这个函数的类型，再提取函数的返回值类型
// //所以 IRootState 就是 store 中所有 state 的类型
// //type 是类型操作，const 是值操作

// function App() {
//   const { count, message, direction } = useAppSelector(
//     (state) => ({
//       count: state.counter.count,
//       message: state.counter.message,
//       direction: state.counter.direction,
//       names: state.counter.names
//       //默认是never类型
//     }),
//     appShallowEqual
//   )
//   //unkown类型上面进行任何操作都是非法的
//   //shallowEqual 浅比较，用来判断两个对象是否相等，但只比较第一层属性。
//   //圆括号返回对象

//   const dispatch = useAppDispatch()
//   function handleChangeMessage() {
//     dispatch(changeMessage('hhehhhheheheh'))
//   }

//   return (
//     <div className="App">
//       <AppHeader />
//       <button onClick={handleChangeMessage}> 修改message </button>
//       <Suspense fallback="">
//         <div className="main">{useRoutes(routes)}</div>
//       </Suspense>
//       <AppFooter />
//       {/* <Demo02 name="Luna" /> */}
//       {/* <h2>当前计数：{count}</h2>
//       <h2>当前消息：{message}</h2> */}
//       <Flex gap="small" wrap>
//         <Button color="pink" variant="filled">
//           Filled
//         </Button>
//       </Flex>
//     </div>
//   )
//   //在suspense.fallback里面添加加载时的占位(组件或者文本)，但是会闪一下，最好不加
//   //因为suspense是对二级路由和之后的页面都会进行刷新，所以会一闪
// }

// export default App
