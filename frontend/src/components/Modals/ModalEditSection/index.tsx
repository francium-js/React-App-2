import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'

import type { ModalEditSectionProps } from 'src/components/Modals/ModalEditSection/types'

import { useModalEditSection } from 'src/components/Modals/ModalEditSection/useModalEditSection'
import FormCreateSection from 'src/components/FormSection'

const ModalEditSection = ({
  isOpen,
  closeModal,
  data,
}: ModalEditSectionProps): JSX.Element => {
  const { control, handleSubmit, isLoading, errors } = useModalEditSection(
    data.sectionId,
  )

  return (
    <SettingsModalsLayout
      title="Edit section"
      isOpen={isOpen}
      isLoading={isLoading}
      closeModal={closeModal}
      onConfirm={handleSubmit}
    >
      <FormCreateSection control={control} errors={errors} />
    </SettingsModalsLayout>
  )
}

export default ModalEditSection
