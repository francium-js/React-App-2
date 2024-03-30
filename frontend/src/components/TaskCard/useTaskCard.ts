import { useDispatch } from 'react-redux'

import type { AppDispatch } from 'src/redux/store'
import type { TaskCardProps } from 'src/components/TaskCard/types'

import taskService from 'src/redux/services/task-operations'

import { useModals } from 'src/contexts/ModalProvider/useModals'

import { Modals } from 'src/components/Modals/constants'

export const useTaskCard = (data: TaskCardProps) => {
  const { onOpen } = useModals()
  const dispatch = useDispatch<AppDispatch>()

  const deleteSection = () => {
    dispatch(taskService.remove(data.id))
  }

  const openModalEditCard = () => {
    onOpen({
      name: Modals.TASK_INFO,
      data: { ...data, openedit: true },
    })
  }

  const openInfoTaskModal = () => {
    onOpen({
      name: Modals.TASK_INFO,
      data,
    })
  }

  const priorityColors = {
    Low: '#24f72e',
    Medium: '#f5af0c',
    High: '#d80d0d',
  }

  return {
    onOpen,
    openInfoTaskModal,
    openModalEditCard,
    deleteSection,
    priorityColors,
  }
}
