import type { ModalDialogProps } from 'src/components/Modals/types'
import type { TaskT } from 'src/types'

export type UseModalTaskInfoProps = {
  isEdit: boolean
} & TaskT

export type ModalTaskInfoProps = {
  data: UseModalTaskInfoProps
} & ModalDialogProps
