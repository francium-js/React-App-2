import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'

import type { AppDispatch } from 'src/redux/store'
import type { TaskFormT } from 'src/components/FormTask/types'
import type { UseModalAddNewTaskProps } from 'src/components/Modals/ModalAddNewTask/types'

import { useAppSelector } from 'src/redux/store'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import { dateToMilliseconds, dateForCalendar } from 'src/helpers'

import taskService from 'src/redux/services/task-operations'

import { schema } from 'src/components/Modals/ModalAddNewTask/validationSchema'

export const useModalAddNew = ({ sectionId }: UseModalAddNewTaskProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useAppSelector(state => state.task)

  const { onClose } = useModals()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormT>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      sectionId,
      dueDate: dateForCalendar(),
      priority: 'Low',
      description: '',
    },
  })

  const createBoardSection = ({ dueDate, ...rest }: TaskFormT): void => {
    dispatch(
      taskService.create({
        dueDate: dateToMilliseconds(dueDate),
        ...rest,
      }),
    )

    onClose()
  }

  return {
    errors,
    control,
    isLoading,
    handleSubmit: handleSubmit(createBoardSection),
  }
}
