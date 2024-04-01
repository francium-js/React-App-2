import type { ModalDialogProps } from 'src/components/Modals/types'

export type ModalEditBoardProps = {
  data: { boardId: string }
} & ModalDialogProps

export type EditSectionT = {
  name: string
}
