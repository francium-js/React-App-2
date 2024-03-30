import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch } from 'src/redux/store'

import { useAppSelector } from 'src/redux/store'

import historyService from 'src/redux/services/history-operations'

export const useModalHistory = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, isLoading } = useAppSelector(state => state.history)

  useEffect(() => {
    dispatch(historyService.getAll())
  }, [])

  return { data, isLoading }
}
