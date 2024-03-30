import { createSlice } from '@reduxjs/toolkit'

import type { HistoryT } from 'src/types'

import { addAsyncHandlers } from 'src/helpers'
import historyService from 'src/redux/services/history-operations'

export type InitialStateT = {
  isLoading: boolean
  data: HistoryT[]
}

const initialState: InitialStateT = {
  isLoading: false,
  data: [],
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(historyService.getById.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = payload
      })
      .addCase(historyService.getAll.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = payload
      })
    addAsyncHandlers(builder, [historyService.getById, historyService.getAll])
  },
})

export default historySlice.reducer
