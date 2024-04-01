import { useDispatch } from 'react-redux'

import type { AppDispatch } from 'src/redux/store'
import type { TaskProps } from 'src/components/Task/types'

import taskService from 'src/redux/services/task-operations'

import { useModals } from 'src/contexts/ModalProvider/useModals'

import { Modals } from 'src/components/Modals/constants'

export const useTask = (data: TaskProps) => {
  const { onOpen } = useModals()
  const dispatch = useDispatch<AppDispatch>()

  const deleteTask = () => {
    dispatch(taskService.remove(data.id))
  }

  const openModalEditTask = () => {
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
    openModalEditTask,
    deleteTask,
    priorityColors,
  }
}
