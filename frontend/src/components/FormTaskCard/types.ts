import type { HTMLProps } from 'react'
import type { Control, FieldErrors } from 'react-hook-form'

export type CardFormT = {
  title: string
  sectionId: string
  dueDate: string
  priority: 'Low' | 'Medium' | 'High'
  description: string
}

export type FormTaskCardProps = {
  errors: FieldErrors<CardFormT>
  control: Control<CardFormT, any>
  status?: string
} & HTMLProps<HTMLDivElement>
