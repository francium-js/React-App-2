import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch } from 'src/redux/store'

import { useAppSelector } from 'src/redux/store'

import sectionService from 'src/redux/services/section-operations'

export const useTaskBoardPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const refBoard = useRef<HTMLDivElement>(null)
  const { data, isLoading } = useAppSelector(state => state.section)

  useEffect(() => {
    if (!data.length) dispatch(sectionService.get())
  }, [])

  return { data, refBoard, isLoading: isLoading && !data.length }
}
