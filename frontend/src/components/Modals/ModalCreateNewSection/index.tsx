import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'

import type { ModalDialogProps } from 'src/components/Modals/types'

import { useModalCreateNewSection } from 'src/components/Modals/ModalCreateNewSection/useModalCreateNewSection'
import FormCreateSection from 'src/components/FormName'

const ModalCreateNewSection = ({
  isOpen,
  closeModal,
}: ModalDialogProps): JSX.Element => {
  const { control, handleSubmit, isLoading, errors } = useModalCreateNewSection()

  return (
    <SettingsModalsLayout
      title="Create new section"
      isOpen={isOpen}
      isLoading={isLoading}
      closeModal={closeModal}
      onConfirm={handleSubmit}
    >
      <FormCreateSection control={control} errors={errors} />
    </SettingsModalsLayout>
  )
}

export default ModalCreateNewSection
