import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch } from 'src/redux/store'

import { useAppSelector } from 'src/redux/store'
import taskService from 'src/redux/services/task-operations'
import sectionService from 'src/redux/services/section-operations'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import { Modals } from 'src/components/Modals/constants'

export const useBoardSection = (sectionId: string, status: string) => {
  const { onOpen } = useModals()
  const dispatch = useDispatch<AppDispatch>()

  const { data } = useAppSelector(state => state.task)

  useEffect(() => {
    if (!data.length) dispatch(taskService.get(sectionId))
  }, [])

  const filteredData = data.filter(item => item?.section?.id === sectionId)

  const editSection = () => {
    onOpen({ name: Modals.EDIT_SECTION, data: { sectionId } })
  }

  const openModalNewCard = () => {
    onOpen({ name: Modals.ADD_NEW_CARD, data: { sectionId, status } })
  }

  const deleteSection = () => {
    dispatch(sectionService.remove(sectionId))
  }

  return { openModalNewCard, deleteSection, editSection, onOpen, data: filteredData }
}
