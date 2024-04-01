import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'

import type { AppDispatch } from 'src/redux/store'
import type { EditSectionT } from 'src/components/Modals/ModalEditBoard/types'

import { useAppSelector } from 'src/redux/store'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import boardService from 'src/redux/services/board-operations'

import { schema } from 'src/components/Modals/ModalEditBoard/validationSchema'

export const useModalEditBoard = (id: string) => {
  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useAppSelector(state => state.task)

  const { onClose } = useModals()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditSectionT>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const createBoardSection = ({ name }: EditSectionT) => {
    dispatch(boardService.patch({ id, name }))
    onClose()
  }

  return {
    control,
    isLoading,
    errors,
    handleSubmit: handleSubmit(createBoardSection),
  }
}
