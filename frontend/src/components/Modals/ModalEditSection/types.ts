import type { ModalDialogProps } from 'src/components/Modals/types'

export type ModalEditSectionProps = {
  data: { sectionId: string }
} & ModalDialogProps

export type EditSectionT = {
  name: string
}
