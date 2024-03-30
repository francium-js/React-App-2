import { createSlice } from '@reduxjs/toolkit'

import type { SectionT } from 'src/types'

import { addAsyncHandlers } from 'src/helpers'
import { goodToast } from 'src/lib/toastify'

import sectionService from 'src/redux/services/section-operations'

export type InitialStateT = {
  isLoading: boolean
  data: SectionT[]
}

const initialState: InitialStateT = {
  isLoading: false,
  data: [],
}

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sectionService.get.fulfilled, (state, { payload }) => {
        state.data = payload
        state.isLoading = false
      })
      .addCase(sectionService.create.fulfilled, (state, { payload }) => {
        state.data = [...state.data, payload]
        state.isLoading = false
        goodToast(`Section "${payload.name}" created`)
      })
      .addCase(sectionService.patch.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = state.data.map(item =>
          item.id === payload.id ? payload : item,
        )
        goodToast(`Section "${payload.name}" appdated`)
      })
      .addCase(sectionService.remove.fulfilled, (state, { payload }) => {
        state.data = state.data.filter(item => item.id !== payload.id)
        state.isLoading = false
        goodToast(`Section deleted`)
      }),
      addAsyncHandlers(builder, [
        sectionService.create,
        sectionService.patch,
        sectionService.remove,
      ])
  },
})

export default sectionSlice.reducer
