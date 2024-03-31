import type { HistoryItemProps } from 'src/components/HistoryItem/types'

import { dateHistoryFormat } from 'src/helpers'

import s from 'src/components/HistoryItem/styles.module.scss'

const HistoryItem = ({
  text,
  createdAt,
  ...props
}: HistoryItemProps): JSX.Element => {
  return (
    <li className={s.container} {...props}>
      {text.map(item => (
        <p key={item}>{item}</p>
      ))}
      <p>{dateHistoryFormat(createdAt)}</p>
    </li>
  )
}

export default HistoryItem
