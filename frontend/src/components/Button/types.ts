import type { HTMLProps } from 'react'

export type ButtonProps = {
  leftIcon?: JSX.Element
  type?: 'button' | 'submit' | 'reset'
  text: string
} & HTMLProps<HTMLButtonElement>
