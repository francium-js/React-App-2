import type { InputProps } from 'src/components/Input/types'

import { Container } from 'src/components/Input/styles'

const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <Container>
      <input {...props}></input>
    </Container>
  )
}

export default Input
