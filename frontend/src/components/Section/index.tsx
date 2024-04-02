import type { SectionProps } from 'src/components/Section/types'

import Button from 'src/components/Button'
import Task from 'src/components/Task'
import Skeleton from 'src/components/Skeleton'
import SettingTask from 'src/components/SettingCard'

import { useSection } from 'src/components/Section/useSection'

import s from 'src/components/Section/styles.module.scss'

const Section = ({ sectionId, name, refBoard }: SectionProps): JSX.Element => {
  const {
    openModalNewTask,
    deleteSection,
    editSection,
    data,
    isLoading,
    boardWidth,
  } = useSection({ sectionId, name, refBoard })

  return (
    <li className={s.container} style={{ minWidth: boardWidth }}>
      <div className={s.header}>
        <h3>{name}</h3>
        <div className={s.headerSetting}>
          <p>{data.length}</p>
          <SettingTask
            onEdit={editSection}
            onAdd={openModalNewTask}
            onDelete={deleteSection}
          />
        </div>
      </div>
      <Button onClick={openModalNewTask}>Add new Task</Button>
      <Skeleton
        isLoading={isLoading}
        dataLength={data.length}
        className={s.skeleton}
      >
        <ul className={s.taskList + ' scroll-y'}>
          {data.map(item => (
            <Task key={item.id} {...item} />
          ))}
        </ul>
      </Skeleton>
    </li>
  )
}

export default Section
