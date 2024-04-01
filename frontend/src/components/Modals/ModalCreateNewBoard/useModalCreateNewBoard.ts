import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'

import type { AppDispatch } from 'src/redux/store'
import type { CreateNewBoardT } from 'src/components/Modals/ModalCreateNewBoard/types'

import { useAppSelector } from 'src/redux/store'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import boardService from 'src/redux/services/board-operations'

import { schema } from 'src/components/Modals/ModalCreateNewBoard/validationSchema'

export const useModalCreateNewBoard = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useAppSelector(state => state.task)

  const { onClose } = useModals()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewBoardT>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const createBoardSection = ({ name }: CreateNewBoardT) => {
    dispatch(boardService.create(name))
    onClose()
  }

  return {
    control,
    isLoading,
    errors,
    handleSubmit: handleSubmit(createBoardSection),
  }
}
