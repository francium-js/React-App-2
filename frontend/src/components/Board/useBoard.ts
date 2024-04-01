import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch } from 'src/redux/store'

import { useAppSelector } from 'src/redux/store'

import sectionService from 'src/redux/services/section-operations'

export const useBoard = (id: string) => {
  const dispatch = useDispatch<AppDispatch>()
  const refBoard = useRef<HTMLDivElement>(null)
  const { data, isLoading } = useAppSelector(state => state.section)

  useEffect(() => {
    dispatch(sectionService.get(id))
  }, [])

  return { data, refBoard, isLoading: isLoading && !data.length }
}
