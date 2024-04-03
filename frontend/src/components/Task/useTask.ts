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

  const openModalEditTask = (isEdit: boolean) => {
    onOpen({
      name: Modals.TASK_INFO,
      data: { isEdit, ...data },
    })
  }

  const priorityColors = {
    Low: '#24f72e',
    Medium: '#f5af0c',
    High: '#d80d0d',
  }

  return {
    onOpen,
    openModalEditTask,
    deleteTask,
    priorityColors,
  }
}
