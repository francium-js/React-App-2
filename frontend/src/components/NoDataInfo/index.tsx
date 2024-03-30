import { FaDatabase } from 'react-icons/fa'

import type { NoDataInfoProps } from 'src/components/NoDataInfo/types'

import { Container } from 'src/components/NoDataInfo/styles'

const NoDataInfo = ({
  color = 'white',
  text,
  leftIcon = <FaDatabase fill={color} />,
  ...props
}: NoDataInfoProps): JSX.Element => {
  return (
    <Container {...props} style={{ color }}>
      {leftIcon}
      {text}
    </Container>
  )
}

export default NoDataInfo
