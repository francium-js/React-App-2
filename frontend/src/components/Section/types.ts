import type { HTMLProps, RefObject } from 'react'

export type SectionProps = {
  sectionId: string
  name: string
  refBoard: RefObject<HTMLDivElement>
} & HTMLProps<HTMLDivElement>

export type UseSectionProps = SectionProps
