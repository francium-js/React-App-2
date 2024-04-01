import { LuCalendarRange } from 'react-icons/lu'
import { FaCircle } from 'react-icons/fa'

import type { TaskProps } from 'src/components/Task/types'

import SettingCard from 'src/components/SettingCard'

import { useTask } from 'src/components/Task/useTask'

import { formatDate, spliceText } from 'src/helpers'

import s from 'src/components/Task/styles.module.scss'

const Task = (data: TaskProps): JSX.Element => {
  const { deleteTask, openModalEditTask, openInfoTaskModal, priorityColors } =
    useTask(data)

  const { title, description, dueDate, priority } = data

  return (
    <li className={s.container} onClick={openInfoTaskModal}>
      <div className={s.settingButtonWrapper}>
        <SettingCard onEdit={openModalEditTask} onDelete={deleteTask} />
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

export default Task
