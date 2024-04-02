import type { HTMLProps, RefObject } from 'react'

export type SectionProps = {
  sectionId: string
  name: string
  refBoard: RefObject<HTMLUListElement>
} & HTMLProps<HTMLDivElement>

export type UseSectionProps = SectionProps
