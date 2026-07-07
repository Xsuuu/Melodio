import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

import CounterReducer from './modules/counter'
import recommendReducer from '../views/discover/c-views/recommend/store/recommend'
import playerReducer from '@/views/player/store/player'

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    recommend: recommendReducer,
    player: playerReducer
  }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
// type IRootState = ReturnType<GetStateFnType>

//另外一个做法,也可以拿到
const state = store.getState
type StateType = typeof state

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch
// const dispath = useDispatch()
//dispatch这个值就是store.dispatch的类型
export const appShallowEqual = shallowEqual

export default store
