import type { HistoryItemProps } from 'src/components/HistoryItem/types'

import { dateHistoryFormat } from 'src/helpers'

import { Container } from 'src/components/HistoryItem/styles'

const HistoryItem = ({
  text,
  createdAt,
  ...props
}: HistoryItemProps): JSX.Element => {
  return (
    <Container {...props}>
      {text.map(item => (
        <p key={item}>{item}</p>
      ))}
      <p>{dateHistoryFormat(createdAt)}</p>
    </Container>
  )
}

export default HistoryItem
