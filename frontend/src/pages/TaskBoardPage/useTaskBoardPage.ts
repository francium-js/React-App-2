import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch } from 'src/redux/store'

import { useAppSelector } from 'src/redux/store'

import sectionService from 'src/redux/services/section-operations'

export const useTaskBoardPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, isLoading } = useAppSelector(state => state.section)

  useEffect(() => {
    if (!data.length) dispatch(sectionService.get())
  }, [])

  return { data, isLoading }
}
