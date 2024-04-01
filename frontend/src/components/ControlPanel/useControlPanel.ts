import { useNavigate } from 'react-router-dom'

import { useModals } from 'src/contexts/ModalProvider/useModals'

export const userControlPanel = () => {
  const { onOpen } = useModals()
  const navigate = useNavigate()

  return { onOpen, navigate }
}
