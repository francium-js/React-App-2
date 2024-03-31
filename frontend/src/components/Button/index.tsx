import { AiOutlinePlus } from 'react-icons/ai'

import type { ButtonProps } from 'src/components/Button/types'

import s from 'src/components/Button/styles.module.scss'

const Button = ({
  leftIcon = <AiOutlinePlus />,
  type = 'button',
  text,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={s.button} type={type} {...props}>
      {leftIcon}
      {text}
    </button>
  )
}

export default Button
