import { FiCrosshair, FiTag } from 'react-icons/fi'
import { LuCalendarRange } from 'react-icons/lu'

import type { TaskCardInfoProps } from 'src/components/TaskCardInfo/types'

import { formatDate } from 'src/helpers'

import s from 'src/components/TaskCardInfo/styles.module.scss'

const TaskCardInfo = ({
  title,
  description,
  dueDate,
  priority,
  status,
  ...props
}: TaskCardInfoProps): JSX.Element => {
  return (
    <div className={s.container} {...props}>
      <h2>{title}</h2>
      <div className={s.paramsWrapper}>
        <ul className={s.paramKey}>
          <li>
            <FiCrosshair size={20} />
            <p>Status :</p>
          </li>
          <li>
            <LuCalendarRange size={20} />
            <p>Due date :</p>
          </li>
          <li>
            <FiTag size={20} />
            <p>Priority :</p>
          </li>
        </ul>
        <ul className={s.paramValue}>
          <li>
            <p>{status}</p>
          </li>
          <li>
            <p>{formatDate(dueDate)}</p>
          </li>
          <li>
            <p>{priority}</p>
          </li>
        </ul>
      </div>

      <div className={s.descriptionContainer}>
        <h3>Description</h3>
        <p className={'scroll-y'}>{description}</p>
      </div>
    </div>
  )
}

export default TaskCardInfo
