import type { Control, FieldErrors } from 'react-hook-form'
import type { CreateNewSectionT } from 'src/components/Modals/ModalCreateNewSection/types'

export type FormCreateSectionProps = {
  errors: FieldErrors<CreateNewSectionT>
  control: Control<CreateNewSectionT, any>
}
