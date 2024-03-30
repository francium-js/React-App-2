import type { ReactNode } from 'react'

import { GiConfirmed } from 'react-icons/gi'
import { MdLockClock } from 'react-icons/md'

import type { ModalDialogProps } from 'src/components/Modals/types'
import type { ReactChildrenT } from 'src/types'

import {
  Modal,
  ButtonClose,
  Container,
  ButtonWrapper,
  ChildrenContainer,
  ButtonConfirmWrapper,
} from 'src/components/Modals/SettingsModalsLayout/styles'

type SettingsModalsLayoutProps = {
  ButtonStyles?: React.CSSProperties
  title?: string
  description?: string | JSX.Element
  isLoading?: boolean
  Button?: ReactNode
} & Partial<ReactChildrenT> &
  Pick<ModalDialogProps, 'closeModal' | 'isOpen' | 'onConfirm'>

const SettingsModalsLayout = ({
  title,
  children,
  Button,
  isLoading,
  closeModal,
  onConfirm,
}: SettingsModalsLayoutProps): JSX.Element => {
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    <Modal onClick={closeModal}>
      <Container onClick={handleContainerClick}>
        <ButtonWrapper>
          <h3>{title}</h3>
          <ButtonClose onClick={closeModal} size={30} />
        </ButtonWrapper>
        <ChildrenContainer>{children}</ChildrenContainer>

        <ButtonConfirmWrapper>
          {Button || (
            <button
              disabled={isLoading}
              style={{ backgroundColor: isLoading ? 'gray' : '' }}
              onClick={onConfirm}
            >
              {isLoading ? <MdLockClock /> : <GiConfirmed />}
              Confirm
            </button>
          )}
        </ButtonConfirmWrapper>
      </Container>
    </Modal>
  )
}

export default SettingsModalsLayout
