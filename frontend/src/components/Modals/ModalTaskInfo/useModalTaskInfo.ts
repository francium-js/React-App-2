import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import type { AppDispatch } from 'src/redux/store'
import type { TaskFormT } from 'src/components/FormTask/types'
import type { UseModalTaskInfoProps } from 'src/components/Modals/ModalTaskInfo/types'

import { useAppSelector } from 'src/redux/store'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import { dateToMilliseconds, dateForCalendar } from 'src/helpers'

import historyService from 'src/redux/services/history-operations'
import taskService from 'src/redux/services/task-operations'

import { schema } from 'src/components/Modals/ModalTaskInfo/validationSchema'

export const useModalTaskInfo = (data: UseModalTaskInfoProps) => {
  const [isEditor, useIsEditor] = useState(data.openedit)
  const { onClose } = useModals()

  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useAppSelector(state => state.task)
  const { data: historyData, isLoading: historyIsLoading } = useAppSelector(
    state => state.history,
  )

  const { id, title, dueDate, priority, description, section } = data

  useEffect(() => {
    dispatch(historyService.getById(id))
  }, [])

  const filteredData = historyData.filter(item => item?.task?.id === data.id)

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TaskFormT>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      title,
      dueDate: dateForCalendar(Number(dueDate)),
      sectionId: section.id,
      priority,
      description,
    },
  })

  const createBoardSection = ({ dueDate, sectionId, ...rest }: TaskFormT): void => {
    dispatch(
      taskService.patch({
        id,
        dueDate: dateToMilliseconds(dueDate),
        sectionId,
        ...rest,
      }),
    )

    onClose()
  }

  const onConfirm = () => {
    if (!isDirty) {
      useIsEditor(false)

      return
    }

    handleSubmit(createBoardSection)()
  }

  return {
    historyData: filteredData,
    historyIsLoading,
    errors,
    control,
    isLoading,
    isDirty,
    isEditor,
    useIsEditor,
    onConfirm,
  }
}
