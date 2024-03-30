import type { HTMLProps } from 'react'

export type SettingCardProps = {
  onEdit: () => void
  onDelete: () => void
  onAdd?: () => void
} & HTMLProps<HTMLDivElement>
