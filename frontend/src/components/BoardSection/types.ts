import type { HTMLProps } from 'react'

export type BoardSectionProps = {
  sectionId: string
  name: string
} & HTMLProps<HTMLDivElement>
