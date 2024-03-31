import { LuCalendarRange } from 'react-icons/lu'
import { FaCircle } from 'react-icons/fa'

import type { TaskCardProps } from 'src/components/TaskCard/types'

import SettingCard from 'src/components/SettingCard'

import { useTaskCard } from 'src/components/TaskCard/useTaskCard'

import { formatDate, spliceText } from 'src/helpers'

import s from 'src/components/TaskCard/styles.module.scss'

const TaskCard = (data: TaskCardProps): JSX.Element => {
  const { deleteSection, openModalEditCard, openInfoTaskModal, priorityColors } =
    useTaskCard(data)

  const { title, description, dueDate, priority } = data

  return (
    <li className={s.container} onClick={openInfoTaskModal}>
      <div className={s.settingButtonWrapper}>
        <SettingCard onEdit={openModalEditCard} onDelete={deleteSection} />
      </div>
      <h3>{title}</h3>
      <p>{spliceText(description, 150)}</p>
      <div className={s.dateWrapper}>
        <LuCalendarRange size={25} />
        <p>{formatDate(dueDate)}</p>
      </div>
      <div className={s.priorityWrapper}>
        <FaCircle size={15} fill={priorityColors[priority]} />
        <p>{priority}</p>
      </div>
    </li>
  )
}

export default TaskCard
