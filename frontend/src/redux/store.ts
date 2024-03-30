import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import type { TypedUseSelectorHook } from 'react-redux'

import taskReducer from 'src/redux/features/task-slice'
import sectionReducer from 'src/redux/features/section-slice'
import historyReducer from 'src/redux/features/history-slice'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    section: sectionReducer,
    history: historyReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
