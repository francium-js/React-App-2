import ModalEditSection from 'src/components/Modals/ModalEditSection'
import ModalEditBoard from 'src/components/Modals/ModalEditBoard'
import ModalCreateNewList from 'src/components/Modals/ModalCreateNewSection'
import ModalHistory from 'src/components/Modals/ModalHistory'
import ModalAddNewTask from 'src/components/Modals/ModalAddNewTask'
import ModalTaskInfo from 'src/components/Modals/ModalTaskInfo'
import ModalAddNewBoard from 'src/components/Modals/ModalCreateNewBoard'

import { Modals } from 'src/components/Modals/constants'

const modalsList = [
  { name: Modals.CREATE_NEW_BOARD, component: ModalAddNewBoard },
  { name: Modals.CREATE_NEW_SECTION, component: ModalCreateNewList },
  { name: Modals.CREATE_NEW_TASK, component: ModalAddNewTask },
  { name: Modals.EDIT_SECTION, component: ModalEditSection },
  { name: Modals.EDIT_BOARD, component: ModalEditBoard },
  { name: Modals.ALL_HISTORY, component: ModalHistory },
  { name: Modals.TASK_INFO, component: ModalTaskInfo },
]

export default modalsList
