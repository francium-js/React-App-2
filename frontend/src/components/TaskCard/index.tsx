import { LuCalendarRange } from 'react-icons/lu'
import { FaCircle } from 'react-icons/fa'

import type { TaskCardProps } from 'src/components/TaskCard/types'

import SettingCard from 'src/components/SettingCard'

import { useTaskCard } from 'src/components/TaskCard/useTaskCard'

import { formatDate, spliceName } from 'src/helpers'

import {
  Container,
  DateWrapper,
  PriorityWrapper,
  SettingCardWrapper,
} from 'src/components/TaskCard/styles'

const TaskCard = (data: TaskCardProps): JSX.Element => {
  const { deleteSection, openModalEditCard, openInfoTaskModal, priorityColors } =
    useTaskCard(data)

  const { title, description, dueDate, priority } = data

  return (
    <Container onClick={openInfoTaskModal}>
      <SettingCardWrapper>
        <SettingCard onEdit={openModalEditCard} onDelete={deleteSection} />
      </SettingCardWrapper>
      <h3>{spliceName(title, 15)}</h3>
      <p>{spliceName(description, 50)}</p>
      <DateWrapper>
        <LuCalendarRange size={25} />
        <p>{formatDate(dueDate)}</p>
      </DateWrapper>
      <PriorityWrapper>
        <FaCircle size={15} fill={priorityColors[priority]} />
        <p>{priority}</p>
      </PriorityWrapper>
    </Container>
  )
}

export default TaskCard
