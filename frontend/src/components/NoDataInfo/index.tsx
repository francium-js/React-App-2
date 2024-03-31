import { FaDatabase } from 'react-icons/fa'

import type { NoDataInfoProps } from 'src/components/NoDataInfo/types'

import s from 'src/components/NoDataInfo/styles.module.scss'

const NoDataInfo = ({
  color = 'gray',
  text,
  leftIcon = <FaDatabase fill={color} />,
  ...props
}: NoDataInfoProps): JSX.Element => {
  return (
    <div className={s.container} {...props} style={{ color }}>
      {leftIcon}
      {text}
    </div>
  )
}

export default NoDataInfo
