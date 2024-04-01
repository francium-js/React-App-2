import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'

import type { ModalDialogProps } from 'src/components/Modals/types'

import { useModalCreateNewBoard } from 'src/components/Modals/ModalCreateNewBoard/useModalCreateNewBoard'
import FormCreateSection from 'src/components/FormName'

const ModalCreateNewBoard = ({
  isOpen,
  closeModal,
}: ModalDialogProps): JSX.Element => {
  const { control, handleSubmit, isLoading, errors } = useModalCreateNewBoard()

  return (
    <SettingsModalsLayout
      title="Create new board"
      isOpen={isOpen}
      isLoading={isLoading}
      closeModal={closeModal}
      onConfirm={handleSubmit}
    >
      <FormCreateSection control={control} errors={errors} />
    </SettingsModalsLayout>
  )
}

export default ModalCreateNewBoard
