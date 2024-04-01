import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import type { TypedUseSelectorHook } from 'react-redux'

import boardReducer from 'src/redux/features/board-slice'
import sectionReducer from 'src/redux/features/section-slice'
import taskReducer from 'src/redux/features/task-slice'
import historyReducer from 'src/redux/features/history-slice'

export const store = configureStore({
  reducer: {
    board: boardReducer,
    section: sectionReducer,
    task: taskReducer,
    history: historyReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
