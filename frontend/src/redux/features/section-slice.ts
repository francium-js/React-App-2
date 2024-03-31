import { createSlice } from '@reduxjs/toolkit'

import { type AsyncThunk } from '@reduxjs/toolkit'

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

import type { SectionT } from 'src/types'

import { addAsyncHandlers } from 'src/helpers'
import { badToast, goodToast } from 'src/lib/toastify'

import sectionService from 'src/redux/services/section-operations'

export type InitialStateT = {
  isLoadingSection: boolean
  isLoading: boolean
  data: SectionT[]
}

const initialState: InitialStateT = {
  isLoadingSection: false,
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
        goodToast(`Section "${payload.name}" created`)
        state.isLoading = false
      })
      .addCase(sectionService.patch.fulfilled, (state, { payload }) => {
        state.data = state.data.map(item =>
          item.id === payload.id ? payload : item,
        )
        goodToast(`Section "${payload.name}" appdated`)
        state.isLoading = false
      })
      .addCase(sectionService.remove.fulfilled, (state, { payload }) => {
        state.data = state.data.filter(item => item.id !== payload.id)
        goodToast(`Section deleted`)
        state.isLoading = false
      }),
      addAsyncHandlers(builder, [
        sectionService.get,
        sectionService.create,
        sectionService.patch,
        sectionService.remove,
      ])
  },
})

export default sectionSlice.reducer
