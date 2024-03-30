import type { ModalDialogProps } from 'src/components/Modals/types'
import type { CardT } from 'src/types'

export type UseModalTaskInfoProps = {
  openedit?: boolean
} & CardT

export type ModalTaskInfoProps = {
  data: UseModalTaskInfoProps
} & ModalDialogProps
