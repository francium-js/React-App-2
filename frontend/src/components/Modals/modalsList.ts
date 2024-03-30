import ModalEditSection from 'src/components/Modals/ModalEditSection'
import ModalCreateNewList from 'src/components/Modals/ModalCreateNewSection'
import ModalHistory from 'src/components/Modals/ModalHistory'
import ModalAddNewCard from 'src/components/Modals/ModalAddNewCard'
import ModalTaskInfo from 'src/components/Modals/ModalTaskInfo'

import { Modals } from 'src/components/Modals/constants'

const modalsList = [
  { name: Modals.EDIT_SECTION, component: ModalEditSection },
  { name: Modals.CREATE_NEW_LIST, component: ModalCreateNewList },
  { name: Modals.ALL_HISTORY, component: ModalHistory },
  { name: Modals.ADD_NEW_CARD, component: ModalAddNewCard },
  { name: Modals.TASK_INFO, component: ModalTaskInfo },
]

export default modalsList
