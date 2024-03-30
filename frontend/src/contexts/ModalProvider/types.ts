import type { Modals } from 'src/components/Modals/constants'
import type { ModalsPropsT } from 'src/components/Modals/types'
import type { ValueOf } from 'src/types'

export type ModalContextT = {
  modal: ModalDataT
  onClose: () => void
  onOpen: (modal: ModalDataT) => void
}

export type ModalDataT = {
  name: ValueOf<Modals> | ''
  data?: ModalsPropsT
}
