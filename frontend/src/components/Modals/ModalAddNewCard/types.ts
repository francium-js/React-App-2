import type { ModalDialogProps } from 'src/components/Modals/types'

export type ModalAddNewCardProps = {
  data: { sectionId: string; status?: string }
} & ModalDialogProps

export type UseModalAddNewCardProps = { sectionId: string; status?: string }
