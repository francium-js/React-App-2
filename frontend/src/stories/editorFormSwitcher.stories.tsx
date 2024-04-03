import EditorFormSwitcher from 'src/components/EditorFormSwitcher'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EditorFormSwitcher> = {
  title: 'EditorFormSwitcher',
  component: EditorFormSwitcher,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'EditorFormSwitcher for switch between form and info',
      },
    },
  },
}

export default meta

export const GoToEditor: StoryObj<typeof EditorFormSwitcher> = {
  args: {
    isLoading: false,
    isEditor: false,
    isDirty: false,
  },
}

export const GoBack: StoryObj<typeof EditorFormSwitcher> = {
  args: {
    isLoading: false,
    isEditor: true,
    isDirty: false,
  },
}

export const Edit: StoryObj<typeof EditorFormSwitcher> = {
  args: {
    isLoading: false,
    isEditor: true,
    isDirty: true,
  },
}

export const EditDisabled: StoryObj<typeof EditorFormSwitcher> = {
  args: {
    isLoading: true,
    isEditor: true,
    isDirty: true,
  },
}
