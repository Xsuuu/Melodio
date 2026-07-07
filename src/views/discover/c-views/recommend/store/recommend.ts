import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistlist,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'
export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  async (_, { dispatch }) => {
    const [bannersRes, hotRes, albumRes, artistRes] = await Promise.all([
      getBanners(),
      getHotRecommend(8),
      getNewAlbum(),
      getArtistlist(5)
    ])
    dispatch(changeBannersAction(bannersRes.banners))
    dispatch(changeHotRecommendAction(hotRes.result))
    dispatch(changeNewAlbumAction(albumRes.albums))
    dispatch(changeSettleSingersAction(artistRes.artists))
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  async (_, { dispatch }) => {
    const res = await Promise.all(rankingIds.map((id) => getPlaylistDetail(id)))
    const playlists = res
      .filter((item) => item.playlist)
      .map((item) => item.playlist)
    dispatch(changeRankingAction(playlists))
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]

  // upRanking: any
  // newRanking: any
  // originRanking: any
  //对象类型
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  // upRanking: {},
  // newRanking: {},
  // originRanking: {}
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(
  //       fetchBannerDataAction.fulfilled,
  //       (state: { banners: any }, { payload }: any) => {
  //         state.banners = payload
  //       }
  //     )
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingAction,
  changeSettleSingersAction
} = recommendSlice.actions

export default recommendSlice.reducer
