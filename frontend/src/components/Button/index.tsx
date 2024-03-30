import { AiOutlinePlus } from 'react-icons/ai'

import type { ButtonProps } from 'src/components/Button/types'

import { StyledButton } from 'src/components/Button/styles'

const Button = ({
  leftIcon = <AiOutlinePlus />,
  type = 'button',
  text,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton type={type} {...props}>
      {leftIcon}
      {text}
    </StyledButton>
  )
}

export default Button
