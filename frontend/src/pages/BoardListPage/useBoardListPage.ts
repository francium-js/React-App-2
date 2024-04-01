import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch } from 'src/redux/store'

import { useAppSelector } from 'src/redux/store'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import boardService from 'src/redux/services/board-operations'

import { Modals } from 'src/components/Modals/constants'

export const useBoardListPage = () => {
  const { onOpen } = useModals()
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()
  const { data, isLoading } = useAppSelector(state => state.board)

  useEffect(() => {
    if (!data.length) dispatch(boardService.get())
  }, [])

  const deleteBoard = (id: string) => {
    dispatch(boardService.remove(id))
  }

  const openBoardEdit = (boardId: string) => {
    onOpen({
      name: Modals.EDIT_BOARD,
      data: { boardId },
    })
  }

  return {
    data,
    isLoading: isLoading && !data.length,
    onOpen,
    navigate,
    deleteBoard,
    openBoardEdit,
  }
}
