// //类组件，现在多用函数式组件和hooks写法了，了解就行
// //写任何组件都必须继承自Component或者PureComponent
// // PureComponent 自动对 props 和 state 进行浅比较来避免不必要的渲染，
// // 而 Component 需要手动优化且总是响应更新。

// //类组件最重要两个东西是state和props

// import React, { PureComponent } from 'react'

// interface IProps {
//   name: string
//   age?: number
// }
// interface IState {
//   message: string
//   counter: number
// }
// interface ISnapshot {
//   address: string
// }

// // export class Demo02 extends PureComponent<IProps, IState, ISnapshot> {
// export class Demo02 extends PureComponent<IProps, IState> {
//   str = 'qwerty'
//   state: IState = {
//     message: 'Hello World',
//     counter: 100
//   }
//   //会自动匹配类型，但是也可以自己加上
//   // constructor(props: IProps) {
//   // super(props)
//   // this.state = {
//   //   message: 'Hello World',
//   //   counter: 100
//   // }
//   // }

//   //因为默认会进行super操作，所有constructor以及内部的super都可以删掉

//   //在 React 类组件中，必须在构造函数中先调用 super(props)，
//   // 否则无法使用 this 关键字。
//   //state 是 React 组件的“内部记忆”，
//   // 用于存储和管理会随着用户交互、网络请求等操作而变化的动态数据。

//   //class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}
//   //对应SS，返回值
//   getSnapshotBeforeUpdate() {
//     return { address: 'ddddddddd' }
//   }

//   // componentDidUpdate(
//   //   prevProps: Readonly<IProps>,
//   //   prevState: Readonly<IState>,
//   //   snapshot?: ISnapshot | undefined
//   // ): void {}
//   //用的很少，了解即可

//   render(): React.ReactNode {
//     return (
//       <div>
//         <div>Demo02</div>
//         <div>name={this.props.name}</div>
//         <div>age={this.props.age}</div>
//         {/* <div>age={(this.state as any).message}</div>
//         <div>age={(this.state as any).counter}</div> */}
//         <div>age={this.state.message}</div>
//         <div>age={this.state.counter}</div>
//       </div>
//     )
//   }
//   //不报错，因为 any 类型关闭了所有类型检查,但是不安全，所以最好也做个类型约束
//   //记得传进这个组件泛型中
// }
