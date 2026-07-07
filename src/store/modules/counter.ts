import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  height: number
  direction: 'left' | 'right' | 'up' | 'down'
  names: string[]
}

const initialState: IState = {
  count: 100,
  message: '哈哈哈',
  height: 1.88,
  direction: 'left',
  names: []
}
//特意定义类型，对于难推导的类型更友好

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // changeMessage(state, { payload }) {
    changeMessage(state, action: PayloadAction<string>) {
      state.message = action.payload
    }
    //{ payload }这里做了一个解构，还记得解构是啥吗哈哈
    //泛型指定了payload是个string
  }
})

export const { changeMessage } = counterSlice.actions
export default counterSlice.reducer
