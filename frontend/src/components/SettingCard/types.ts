import type { HTMLProps } from 'react'

export type SettingCardProps = {
  onEdit: (value: boolean) => void
  onDelete: () => void
  onAdd?: () => void
} & HTMLProps<HTMLDivElement>
