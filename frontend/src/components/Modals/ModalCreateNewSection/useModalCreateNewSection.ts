import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'

import type { AppDispatch } from 'src/redux/store'
import type { CreateNewSectionT } from 'src/components/Modals/ModalCreateNewSection/types'

import { useAppSelector } from 'src/redux/store'
import boardService from 'src/redux/services/section-operations'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import { schema } from 'src/components/Modals/ModalCreateNewSection/validationSchema'

export const useModalCreateNewSection = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useAppSelector(state => state.task)

  const { onClose } = useModals()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewSectionT>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const createBoardSection = (data: CreateNewSectionT) => {
    dispatch(boardService.create(data.name))
    onClose()
  }

  return {
    control,
    isLoading,
    errors,
    handleSubmit: handleSubmit(createBoardSection),
  }
}
