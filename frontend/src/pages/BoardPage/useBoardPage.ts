import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import type { AppDispatch } from 'src/redux/store'

import { useAppSelector } from 'src/redux/store'

import sectionService from 'src/redux/services/section-operations'

export const useBoardPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const refBoard = useRef<HTMLUListElement>(null)
  const { boardId = '' } = useParams()
  const { data, isLoading } = useAppSelector(state => state.section)
  const { data: boardData } = useAppSelector(state => state.board)

  useEffect(() => {
    dispatch(sectionService.get(boardId))
  }, [])

  const currentBoard = boardData.find(item => item.id === boardId)

  return {
    data,
    refBoard,
    isLoading: isLoading && !data.length,
    name: currentBoard?.name,
  }
}
