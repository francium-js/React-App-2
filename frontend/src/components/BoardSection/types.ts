import type { HTMLProps, RefObject } from 'react'

export type BoardSectionProps = {
  sectionId: string
  name: string
  refBoard: RefObject<HTMLDivElement>
} & HTMLProps<HTMLDivElement>

export type UseBoardSectionProps = BoardSectionProps
