// //函数调用签名
// //接口描述对象，签名描述函数
// interface IFnCall (
//   (name: string, age: number): string
// //签名中返回值类型用冒号，只有单独定义函数类型的时候采用箭头
// )
// const foo: IFnCall = function(name, age){
// //这就是签名
//   return 'rfsaf'
// }
// foo('wdd', 18)

// //传入的是函数
// interface IFnCall (
//   (fn: () => string, age: number): string
// )
// const foo: IFnCall = function(fn, age){
//   return 'rfsaf'
// }
// foo(() => {
//   return 'aaaa'
// }, 18)

// //<TWhy>泛型
// interface IFnCall {
//   <TWhy>(fn: () => TWhy, age: number): TWhy
// }
// const foo: IFnCall = function(fn, age){
//   return fn()
// }
// foo<number>(() => {
//   return 111
// }, 18)
// const res = foo(() => {
//   return 111
// }, 18)
// //如果不传入明确的泛型，就会自己类型推断

export {}
