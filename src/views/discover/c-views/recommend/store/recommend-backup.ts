// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'
// import recommend from '..'

// // export const fetchBannerDataAction = createAsyncThunk('banners', (arg, { getState }) => {
// export const fetchBannerDataAction = createAsyncThunk(
//   'banners',
//   async (arg, { dispatch }) => {
//     const res = await getBanners()
//     // return res.banners
//     dispatch(changeBannersAction(res.banners))
//   }
// )

// export const fetchHotRecommendAction = createAsyncThunk(
//   'hotrecommend',
//   async (arg, { dispatch }) => {
//     const res = await getHotRecommend(8)
//     dispatch(changeHotRecommendAction(res.result))
//   }
// )

// export const fetchNewAlbumAction = createAsyncThunk(
//   'newalbum',
//   async (arg, { dispatch }) => {
//     const res = await getNewAlbum()
//     dispatch(changeNewAlbumAction(res.albums))
//   }
// )

// interface IRecommendState {
//   banners: any[]
//   hotRecommends: any[]
//   newAlbums: any[]
// }

// const initialState: IRecommendState = {
//   banners: [],
//   hotRecommends: [],
//   newAlbums: []
// }

// const recommendSlice = createSlice({
//   name: 'recommend',
//   initialState,
//   reducers: {
//     changeBannersAction(state, { payload }) {
//       state.banners = payload
//     },
//     changeHotRecommendAction(state, { payload }) {
//       state.hotRecommends = payload
//     },
//     changeNewAlbumAction(state, { payload }) {
//       state.newAlbums = payload
//     }
//   }
//   // extraReducers: (builder) => {
//   //   builder
//   //     .addCase(fetchBannerDataAction.pending, () => {
//   //       console.log('pending')
//   //     })
//   //     .addCase(
//   //       fetchBannerDataAction.fulfilled,
//   //       (state: { banners: any }, { payload }: any) => {
//   //         state.banners = payload
//   //       }
//   //     )
//   //     .addCase(fetchBannerDataAction.rejected, () => {
//   //       console.log('rejected')
//   //     })
//   // }
// })

// export const {
//   changeBannersAction,
//   changeHotRecommendAction,
//   changeNewAlbumAction
// } = recommendSlice.actions

// export default recommendSlice.reducer
