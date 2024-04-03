import type { Meta } from '@storybook/react'

import ModalCreateNewSection from 'src/components/Modals/ModalCreateNewSection'
import ModalCreateNewBoard from 'src/components/Modals/ModalCreateNewBoard'
import ModalEditSection from 'src/components/Modals/ModalEditSection'
import ModalAddNewTask from 'src/components/Modals/ModalAddNewTask'
import ModalEditBoard from 'src/components/Modals/ModalEditBoard'
import ModalTaskInfo from 'src/components/Modals/ModalTaskInfo'

import type { ModalAddNewTaskProps } from 'src/components/Modals/ModalAddNewTask/types'
import type { ModalTaskInfoProps } from 'src/components/Modals/ModalTaskInfo/types'

import ModalProvider from 'src/contexts/ModalProvider'

import { store } from 'src/redux/store'
import { Provider } from 'react-redux'

import 'src/App.css'
import 'src/index.css'

const meta: Meta<typeof ModalProvider> = {
  title: 'Modals',
  component: ModalProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'All modals in project',
      },
    },
  },
}

export default meta

export const TaskInfo = (args: ModalTaskInfoProps) => (
  <Provider store={store}>
    <ModalProvider>
      <div id="root" />
      <div id="modal-root">
        <ModalTaskInfo {...args} />
      </div>
    </ModalProvider>
  </Provider>
)

TaskInfo.args = {
  data: {
    isEdit: true,
    id: '1',
    title: 'title',
    status: 'status',
    description: 'description',
    priority: 'High' as const,
    dueDate: '1873485357',
    section: { id: '1', name: 'section' },
  },
}

export const AddNewTask = (args: ModalAddNewTaskProps) => (
  <Provider store={store}>
    <ModalProvider>
      <div id="root" />
      <div id="modal-root">
        <ModalAddNewTask {...args} />
      </div>
    </ModalProvider>
  </Provider>
)

AddNewTask.args = {
  data: {
    isEdit: true,
    id: '1',
    title: 'title',
    status: 'status',
    description: 'description',
    priority: 'High' as const,
    dueDate: '1873485357',
    section: { id: '1', name: 'section' },
  },
}

export const CreateNewBoard = (args: any) => (
  <Provider store={store}>
    <ModalProvider>
      <div id="root" />
      <div id="modal-root">
        <ModalCreateNewBoard {...args} />
      </div>
    </ModalProvider>
  </Provider>
)

CreateNewBoard.args = {}

export const CreateNewSection = (args: any) => (
  <Provider store={store}>
    <ModalProvider>
      <div id="root" />
      <div id="modal-root">
        <ModalCreateNewSection {...args} />
      </div>
    </ModalProvider>
  </Provider>
)

CreateNewSection.args = {}

export const EditBoard = (args: any) => (
  <Provider store={store}>
    <ModalProvider>
      <div id="root" />
      <div id="modal-root">
        <ModalEditBoard {...args} />
      </div>
    </ModalProvider>
  </Provider>
)

EditBoard.args = {
  data: { boardId: '1' },
}

export const EditSection = (args: any) => (
  <Provider store={store}>
    <ModalProvider>
      <div id="root" />
      <div id="modal-root">
        <ModalEditSection {...args} />
      </div>
    </ModalProvider>
  </Provider>
)

EditSection.args = { data: { sectionId: '1' } }
