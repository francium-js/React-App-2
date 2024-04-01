import type { ModalDialogProps } from 'src/components/Modals/types'

export type ModalAddNewTaskProps = {
  data: { sectionId: string; status?: string }
} & ModalDialogProps

export type UseModalAddNewTaskProps = { sectionId: string; status?: string }
