import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'

import type { AppDispatch } from 'src/redux/store'
import type { CardFormT } from 'src/components/FormTaskCard/types'
import type { UseModalAddNewCardProps } from 'src/components/Modals/ModalAddNewCard/types'

import taskService from 'src/redux/services/task-operations'
import { useAppSelector } from 'src/redux/store'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { dateToMilliseconds, dateForCalendar } from 'src/helpers'

import { schema } from 'src/components/Modals/ModalAddNewCard/validationSchema'

export const useModalAddNewCard = ({ sectionId }: UseModalAddNewCardProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useAppSelector(state => state.task)

  const { onClose } = useModals()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormT>({
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

  const createBoardSection = ({ dueDate, ...rest }: CardFormT): void => {
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
