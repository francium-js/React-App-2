import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'

import type { AppDispatch } from 'src/redux/store'
import type { CreateNewSectionT } from 'src/components/Modals/ModalCreateNewSection/types'

import { useAppSelector } from 'src/redux/store'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import sectionService from 'src/redux/services/section-operations'

import { schema } from 'src/components/Modals/ModalCreateNewSection/validationSchema'

export const useModalCreateNewSection = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useAppSelector(state => state.task)
  const { boardId = '' } = useParams()

  const { onClose } = useModals()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewSectionT>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const createBoardSection = ({ name }: CreateNewSectionT) => {
    dispatch(sectionService.create({ name, boardId }))
    onClose()
  }

  return {
    control,
    isLoading,
    errors,
    handleSubmit: handleSubmit(createBoardSection),
  }
}
