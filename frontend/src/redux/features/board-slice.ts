import { createSlice } from '@reduxjs/toolkit'
import type { BoardT } from 'src/types'

import { addAsyncHandlers } from 'src/helpers'
import { goodToast } from 'src/lib/toastify'

import boardService from 'src/redux/services/board-operations'

export type InitialStateT = {
  isLoading: boolean
  data: BoardT[]
}

const initialState: InitialStateT = {
  isLoading: false,
  data: [],
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(boardService.get.fulfilled, (state, { payload }) => {
        state.data = payload
        state.isLoading = false
      })
      .addCase(boardService.create.fulfilled, (state, { payload }) => {
        state.data = [...state.data, payload]
        goodToast(`Board "${payload.name}" created`)
        state.isLoading = false
      })
      .addCase(boardService.patch.fulfilled, (state, { payload }) => {
        state.data = state.data.map(item =>
          item.id === payload.id ? payload : item,
        )
        goodToast(`Board "${payload.name}" appdated`)
        state.isLoading = false
      })
      .addCase(boardService.remove.fulfilled, (state, { payload }) => {
        state.data = state.data.filter(item => item.id !== payload.id)
        goodToast(`Board deleted`)
        state.isLoading = false
      }),
      addAsyncHandlers(builder, [
        boardService.get,
        boardService.create,
        boardService.patch,
        boardService.remove,
      ])
  },
})

export default boardSlice.reducer
