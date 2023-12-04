import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'sayci',
  initialState,
  reducers: {
    ustegel: (state) => {
      state.value += 1
    },
    cix: (state) => {
      state.value -= 1
    },
    rehimartir: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { ustegel, cix, rehimartir } = counterSlice.actions

export default counterSlice.reducer