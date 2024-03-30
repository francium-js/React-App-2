import { useDispatch } from 'react-redux'

import { useModals } from 'src/contexts/ModalProvider/useModals'

import type { AppDispatch } from 'src/redux/store'

export const userControlPanel = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { onOpen } = useModals()

  return { dispatch, onOpen }
}
