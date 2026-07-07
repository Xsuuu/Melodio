// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { getSongDetail, getSongLyrics } from '../service/player'
// import { ILyric, parseLyric } from '@/utils/parse-lyric'

// export const fetchCurrentSongAction = createAsyncThunk(
//   'currentSong',
//   (id: number, { dispatch }) => {
//     getSongDetail(id).then((res) => {
//       if (!res.songs.length) return
//       const song = res.songs[0]

//       dispatch(changeCurrentSongAction(song))
//     })
//     getSongLyrics(id).then((res) => {
//       if (!res.lrc.lyric.length) return
//       const lyricString = res.lrc.lyric
//       const lyrics = parseLyric(lyricString)
//       dispatch(changeLyricsAction(lyrics))

//       for (let i = 0; i < lyrics.length; i++) {
//         const lyric = lyrics[i]
//       }
//     })
//   }
// )

// interface IPlayerSlice {
//   currentSong: any
//   lyrics: ILyric[]
//   lyricsIndex: number
//   playSongList: any[]
//   playSongIndex: number
// }

// const initialState: IPlayerSlice = {
//   currentSong: {},
//   lyrics: [],
//   lyricsIndex: -1,
//   playSongList: [
//     {
//       name: 'I ve',
//       mainTitle: null,
//       additionalTitle: null,
//       id: 2024815055,
//       pst: 0,
//       t: 0,
//       ar: [
//         {
//           id: 55226894,
//           name: 'baifm',
//           tns: [],
//           alias: []
//         }
//       ],
//       alia: [],
//       pop: 100,
//       st: 0,
//       rt: '',
//       fee: 8,
//       v: 44,
//       crbt: null,
//       cf: '',
//       al: {
//         id: 160612329,
//         name: 'I ve',
//         picUrl:
//           'https://p4.music.126.net/JeHCcN9Y6A2OE11B8p3Jnw==/109951168381277155.jpg',
//         tns: [],
//         pic_str: '109951168381277155',
//         pic: 109951168381277150
//       },
//       dt: 115384,
//       h: {
//         br: 320000,
//         fid: 0,
//         size: 4617645,
//         vd: -56269,
//         sr: 48000
//       },
//       m: {
//         br: 192000,
//         fid: 0,
//         size: 2770605,
//         vd: -53774,
//         sr: 48000
//       },
//       l: {
//         br: 128000,
//         fid: 0,
//         size: 1847085,
//         vd: -52347,
//         sr: 48000
//       },
//       sq: {
//         br: 1032520,
//         fid: 0,
//         size: 14892122,
//         vd: -56412,
//         sr: 48000
//       },
//       hr: {
//         br: 1769407,
//         fid: 0,
//         size: 25520301,
//         vd: -56265,
//         sr: 48000
//       },
//       a: null,
//       cd: '01',
//       no: 1,
//       rtUrl: null,
//       ftype: 0,
//       rtUrls: [],
//       djId: 0,
//       copyright: 0,
//       s_id: 0,
//       mark: 537141248,
//       originCoverType: 3,
//       originSongSimpleData: null,
//       tagPicList: null,
//       resourceState: true,
//       version: 10,
//       songJumpInfo: null,
//       entertainmentTags: null,
//       awardTags: null,
//       displayTags: null,
//       markTags: [],
//       songFeature: null,
//       single: 0,
//       noCopyrightRcmd: null,
//       mv: 0,
//       rtype: 0,
//       rurl: null,
//       mst: 9,
//       cp: 0,
//       publishTime: 1672588800000
//     },
//     {
//       name: '可愛くてごめん (feat. かぴ)',
//       mainTitle: '可愛くてごめん ',
//       additionalTitle: '(feat. かぴ)',
//       id: 1969519579,
//       pst: 0,
//       t: 0,
//       ar: [
//         {
//           id: 19859,
//           name: 'HoneyWorks',
//           tns: [],
//           alias: []
//         },
//         {
//           id: 1050771,
//           name: 'かぴ',
//           tns: [],
//           alias: []
//         }
//       ],
//       alia: [],
//       pop: 100,
//       st: 0,
//       rt: '',
//       fee: 8,
//       v: 40,
//       crbt: null,
//       cf: '',
//       al: {
//         id: 149180262,
//         name: '告白実行委員会 -FLYING SONGS- 恋してる',
//         picUrl:
//           'https://p3.music.126.net/ygvJefaxNtKGCeidHU0GpA==/109951167745817208.jpg',
//         tns: [],
//         pic_str: '109951167745817208',
//         pic: 109951167745817220
//       },
//       dt: 219893,
//       h: {
//         br: 320000,
//         fid: 0,
//         size: 8798445,
//         vd: -73909,
//         sr: 48000
//       },
//       m: {
//         br: 192000,
//         fid: 0,
//         size: 5279085,
//         vd: -71404,
//         sr: 48000
//       },
//       l: {
//         br: 128000,
//         fid: 0,
//         size: 3519405,
//         vd: -69903,
//         sr: 48000
//       },
//       sq: {
//         br: 1119957,
//         fid: 0,
//         size: 30783907,
//         vd: -73898,
//         sr: 48000
//       },
//       hr: {
//         br: 1883326,
//         fid: 0,
//         size: 51766367,
//         vd: -73898,
//         sr: 48000
//       },
//       a: null,
//       cd: '01',
//       no: 7,
//       rtUrl: null,
//       ftype: 0,
//       rtUrls: [],
//       djId: 0,
//       copyright: 1,
//       s_id: 0,
//       mark: 17717010432,
//       originCoverType: 0,
//       originSongSimpleData: null,
//       tagPicList: null,
//       resourceState: true,
//       version: 6,
//       songJumpInfo: null,
//       entertainmentTags: null,
//       awardTags: null,
//       displayTags: null,
//       markTags: [],
//       single: 0,
//       noCopyrightRcmd: null,
//       mv: 0,
//       rtype: 0,
//       rurl: null,
//       mst: 9,
//       cp: 1418220,
//       publishTime: 1661616000000,
//       tns: ['这么可爱真是抱歉']
//     },
//     {
//       name: 'The Other Side Of Paradise',
//       mainTitle: null,
//       additionalTitle: null,
//       id: 427416520,
//       pst: 0,
//       t: 0,
//       ar: [
//         {
//           id: 847346,
//           name: 'Glass Animals',
//           tns: [],
//           alias: []
//         }
//       ],
//       alia: [],
//       pop: 100,
//       st: 0,
//       rt: null,
//       fee: 1,
//       v: 55,
//       crbt: null,
//       cf: '',
//       al: {
//         id: 34839708,
//         name: 'How To Be A Human Being',
//         picUrl:
//           'https://p3.music.126.net/H2NXMKs6JryHDeZsIS7hnw==/109951168501983706.jpg',
//         tns: [],
//         pic_str: '109951168501983706',
//         pic: 109951168501983710
//       },
//       dt: 320654,
//       h: {
//         br: 320000,
//         fid: 0,
//         size: 12829301,
//         vd: -44068,
//         sr: 44100
//       },
//       m: {
//         br: 192000,
//         fid: 0,
//         size: 7697598,
//         vd: -41482,
//         sr: 44100
//       },
//       l: {
//         br: 128000,
//         fid: 0,
//         size: 5131746,
//         vd: -39847,
//         sr: 44100
//       },
//       sq: {
//         br: 937438,
//         fid: 0,
//         size: 37574201,
//         vd: -44389,
//         sr: 44100
//       },
//       hr: null,
//       a: null,
//       cd: '1',
//       no: 8,
//       rtUrl: null,
//       ftype: 0,
//       rtUrls: [],
//       djId: 0,
//       copyright: 1,
//       s_id: 0,
//       mark: 17181188096,
//       originCoverType: 1,
//       originSongSimpleData: null,
//       tagPicList: null,
//       resourceState: true,
//       version: 21,
//       songJumpInfo: null,
//       entertainmentTags: null,
//       awardTags: null,
//       displayTags: null,
//       markTags: [],
//       songFeature: null,
//       single: 0,
//       noCopyrightRcmd: null,
//       mv: 22724879,
//       rtype: 0,
//       rurl: null,
//       mst: 9,
//       cp: 7003,
//       publishTime: 1472140800000,
//       tns: ['天堂的彼端']
//     }
//   ],
//   playSongIndex: -1
// }

// const playerSlice = createSlice({
//   name: 'player',
//   initialState,
//   reducers: {
//     changeCurrentSongAction(state, { payload }) {
//       state.currentSong = payload
//     },
//     changeLyricsAction(state, { payload }) {
//       state.lyrics = payload
//     },
//     changeLyricsIndexAction(state, { payload }) {
//       state.lyricsIndex = payload
//     }
//   }
// })

// export const {
//   changeCurrentSongAction,
//   changeLyricsAction,
//   changeLyricsIndexAction
// } = playerSlice.actions
// export default playerSlice.reducer
