import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'

import type { ModalEditBoardProps } from 'src/components/Modals/ModalEditBoard/types'

import { useModalEditBoard } from 'src/components/Modals/ModalEditBoard/useModalEditBoard'
import FormCreateBoard from 'src/components/FormName'

const ModalEditBoard = ({
  isOpen,
  closeModal,
  data,
}: ModalEditBoardProps): JSX.Element => {
  const { control, handleSubmit, isLoading, errors } = useModalEditBoard(
    data.boardId,
  )

  return (
    <SettingsModalsLayout
      title="Edit Board"
      isOpen={isOpen}
      isLoading={isLoading}
      closeModal={closeModal}
      onConfirm={handleSubmit}
    >
      <FormCreateBoard control={control} errors={errors} />
    </SettingsModalsLayout>
  )
}

export default ModalEditBoard
