import { FiCrosshair, FiTag } from 'react-icons/fi'
import { LuCalendarRange } from 'react-icons/lu'

import type { TaskCardInfoProps } from 'src/components/TaskCardInfo/types'

import { formatDate, spliceName } from 'src/helpers'

import {
  Container,
  ParamsContainer,
  Description,
} from 'src/components/TaskCardInfo/styles'

const TaskCardInfo = ({
  title,
  description,
  dueDate,
  priority,
  status,
  ...props
}: TaskCardInfoProps): JSX.Element => {
  return (
    <Container {...props}>
      <h3>{title}</h3>
      <ParamsContainer>
        <ul>
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
        <ul>
          <li>{spliceName(status, 15)}</li>
          <li>{formatDate(dueDate)}</li>
          <li>{priority}</li>
        </ul>
      </ParamsContainer>

      <Description>
        <h3>Description</h3>
        <p>{description}</p>
      </Description>
    </Container>
  )
}

export default TaskCardInfo
