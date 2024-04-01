import { createAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { badToast } from 'src/lib/toastify'

import type { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit'
import type { InitialStateT } from 'src/redux/features/task-slice'
import type { AppDispatch } from 'src/redux/store'

export const addAsyncHandlers = (
  builder: ActionReducerMapBuilder<any>,
  asyncActions: AsyncThunk<any, any, any>[],
) => {
  asyncActions.forEach((action: AsyncThunk<any, any, any>) => {
    builder
      .addCase(action.pending, (state: InitialStateT) => {
        state.isLoading = true
      })
      .addCase(action.rejected, (state: InitialStateT) => {
        badToast('Something bad happened :(')
        state.isLoading = false
      })
  })
}

export const dateHistoryFormat = (milliseconds: string): string => {
  const date = new Date(Number(milliseconds))

  const month = date.toLocaleString('en', { month: 'short' })
  const dayOfMonth = date.getDate()

  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12
  hours = hours ? hours : 12

  const formattedDate = `${month} ${dayOfMonth} at ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`

  return formattedDate
}

export const formatDate = (milliseconds: string): string => {
  const date = new Date(Number(milliseconds))

  const dayOfWeek = date.toLocaleString('en', { weekday: 'short' }).slice(0, 3)
  const dayOfMonth = date.getDate()
  const month = date.toLocaleString('en', { month: 'short' }).slice(0, 3)

  return `${dayOfWeek}, ${dayOfMonth} ${month}`
}

export const dateToMilliseconds = (value: string) => {
  const milliseconds = new Date(value).getTime()

  return milliseconds
}

export const spliceText = (value: string, howMuch: number) => {
  return value.length > howMuch ? `${value.slice(0, howMuch)}...` : value
}

export const dateForCalendar = (ms?: number) => {
  const today = ms ? new Date(ms) : new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()

  const updateMonth = month < 10 ? '0' + month : month
  const updateday = day < 10 ? '0' + day : day

  return `${year}-${updateMonth}-${updateday}`
}
