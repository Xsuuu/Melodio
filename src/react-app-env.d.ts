/// <reference types="react-scripts" />

//react-app-env.d.ts是用来类型声明的
//.jpg、.bmp、.avif等等

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}

declare module '*.less' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
//尽量不要修改源码，而是在这个文件里面做扩展
