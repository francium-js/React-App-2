import type { HTMLProps } from 'react'

export type ButtonProps = {
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  type?: 'button' | 'submit' | 'reset'
} & HTMLProps<HTMLButtonElement>
