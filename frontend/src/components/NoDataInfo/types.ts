import type { HTMLProps } from 'react'

export type NoDataInfoProps = {
  color?: string
  text: string
  leftIcon?: JSX.Element
} & HTMLProps<HTMLParagraphElement>
