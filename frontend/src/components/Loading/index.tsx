import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { Container, IconWrapper } from 'src/components/Loading/styles'

const Loading = (): JSX.Element => {
  return (
    <Container>
      <IconWrapper>
        <AiOutlineLoading3Quarters fill="white" size={40} />
      </IconWrapper>
      Loading...
    </Container>
  )
}

export default Loading
