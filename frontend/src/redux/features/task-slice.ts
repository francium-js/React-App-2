import { createSlice } from '@reduxjs/toolkit'

import type { CardT } from 'src/types'

import { addAsyncHandlers } from 'src/helpers'

import taskService from 'src/redux/services/task-operations'
import { goodToast } from 'src/lib/toastify'

export type InitialStateT = {
  isLoading: boolean
  data: CardT[]
}

const initialState: InitialStateT = {
  isLoading: false,
  data: [],
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(taskService.get.fulfilled, (state, { payload }) => {
        state.data = [...state.data, ...payload]
        state.isLoading = false
      })
      .addCase(taskService.create.fulfilled, (state, { payload }) => {
        state.data = [...state.data, payload]
        state.isLoading = false
        goodToast(`Task "${payload.title}" created`)
      })
      .addCase(taskService.patch.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = state.data.map(item =>
          item.id === payload.id ? payload : item,
        )
        goodToast(`Task "${payload.title}" appdated`)
      })
      .addCase(taskService.remove.fulfilled, (state, { payload }) => {
        state.data = state.data.filter(item => item.id !== payload.id)
        state.isLoading = false
        goodToast(`Task deleted`)
      })
    addAsyncHandlers(builder, [
      taskService.get,
      taskService.create,
      taskService.patch,
      taskService.remove,
    ])
  },
})

export default taskSlice.reducer
