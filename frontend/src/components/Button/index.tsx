import { AiOutlinePlus } from 'react-icons/ai'

import type { ButtonProps } from 'src/components/Button/types'

import s from 'src/components/Button/styles.module.scss'

const Button = ({
  leftIcon = <AiOutlinePlus />,
  rightIcon,
  type = 'button',
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={s.button} type={type} {...props}>
      <div>{leftIcon}</div>
      {children}
      <div>{rightIcon}</div>
    </button>
  )
}

export default Button
