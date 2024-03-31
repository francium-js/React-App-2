import type { ReactNode } from 'react'

import { GiConfirmed } from 'react-icons/gi'
import { MdLockClock } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'

import type { ModalDialogProps } from 'src/components/Modals/types'
import type { ReactChildrenT } from 'src/types'

import s from 'src/components/Modals/SettingsModalsLayout/styles.module.scss'

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
    <div className={s.container} onClick={closeModal}>
      <div onClick={handleContainerClick}>
        <div className={s.header}>
          <h3>{title}</h3>
          <IoMdClose className={s.buttonClose} onClick={closeModal} size={30} />
        </div>
        <div className="px-5">{children}</div>

        <div className={s.buttonConfirm_Wrapper}>
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
        </div>
      </div>
    </div>
  )
}

export default SettingsModalsLayout
