// import hyRequest from '@/service'
// import React, { memo, useEffect, useState } from 'react'
// import type { FC, ReactNode } from 'react'

// interface Iprops {
//   children?: ReactNode
// }

// export interface IBannerData {
//   targetId: number
//   bigImageUrl: string
//   imageUrl: string
//   targetType: number
//   typeTitle: string
//   s_ctrp: string
//   url: string
// }

// const Recommend: FC<Iprops> = () => {
//   const [banners, setBanners] = useState<IBannerData[]>([])

//   //泛型的常见写法：
//   // // 字符串
//   // const [name, setName] = useState<string>('');

//   // // 数字
//   // const [count, setCount] = useState<number>(0);

//   // // 布尔值
//   // const [loading, setLoading] = useState<boolean>(false);

//   // // 对象
//   // const [user, setUser] = useState<User | null>(null);

//   // // 联合类型
//   // const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

//   // // 数组
//   // const [list, setList] = useState<string[]>([]);

//   useEffect(() => {
//     hyRequest
//       .get({
//         url: '/banner'
//       })
//       .then((res) => {
//         console.log(res.banners)
//         setBanners(res.banners)
//       })
//   }, [])

//   return (
//     <div>
//       <div>Recommend</div>
//       {banners?.map((item, index) => {
//         return <div key={index}>{item.bigImageUrl}</div>
//       })}
//     </div>
//   )
// }

// export default Recommend
