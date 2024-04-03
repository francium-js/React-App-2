import ModalTaskInfo from 'src/components/Modals/ModalTaskInfo'

import type { Meta } from '@storybook/react'
import type { ModalTaskInfoProps } from 'src/components/Modals/ModalTaskInfo/types'

const meta: Meta<typeof ModalTaskInfo> = {
  title: 'ModalTaskInfo',
  component: ModalTaskInfo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Task modal, with info and task editor',
      },
    },
  },
}

export default meta

export const Loading = (args: ModalTaskInfoProps) => <ModalTaskInfo {...args} />

Loading.args = {
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
