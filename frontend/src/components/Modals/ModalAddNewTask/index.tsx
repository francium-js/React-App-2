import type { ModalAddNewTaskProps } from 'src/components/Modals/ModalAddNewTask/types'

import SettingsModalsLayout from 'src/components/Modals/SettingsModalsLayout'
import FormCreateTask from 'src/components/FormTask'

import { useModalAddNew } from 'src/components/Modals/ModalAddNewTask/useModalAddNewTask'

const ModalAddNewTask = ({
  isOpen,
  closeModal,
  data,
}: ModalAddNewTaskProps): JSX.Element => {
  const { errors, control, isLoading, handleSubmit } = useModalAddNew(data)

  return (
    <SettingsModalsLayout
      title="Add new task"
      isOpen={isOpen}
      isLoading={isLoading}
      closeModal={closeModal}
      onConfirm={handleSubmit}
    >
      <FormCreateTask errors={errors} control={control} status={data.status} />
    </SettingsModalsLayout>
  )
}

export default ModalAddNewTask
