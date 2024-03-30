import type { ModalAddNewCardProps } from 'src/components/Modals/ModalAddNewCard/types'

import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'
import FormCreateTaskCard from 'src/components/FormTaskCard'

import { useModalAddNewCard } from 'src/components/Modals/ModalAddNewCard/useModalAddNewCard'

const ModalAddNewCard = ({
  isOpen,
  closeModal,
  data,
}: ModalAddNewCardProps): JSX.Element => {
  const { errors, control, isLoading, handleSubmit } = useModalAddNewCard(data)

  return (
    <SettingsModalsLayout
      title="Add new card"
      isOpen={isOpen}
      isLoading={isLoading}
      closeModal={closeModal}
      onConfirm={handleSubmit}
    >
      <FormCreateTaskCard errors={errors} control={control} status={data.status} />
    </SettingsModalsLayout>
  )
}

export default ModalAddNewCard
