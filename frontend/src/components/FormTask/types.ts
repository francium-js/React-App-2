import type { HTMLProps } from 'react'
import type { Control, FieldErrors } from 'react-hook-form'

export type TaskFormT = {
  title: string
  sectionId: string
  dueDate: string
  priority: 'Low' | 'Medium' | 'High'
  description: string
}

export type FormTaskProps = {
  errors: FieldErrors<TaskFormT>
  control: Control<TaskFormT, any>
  status?: string
} & HTMLProps<HTMLDivElement>
