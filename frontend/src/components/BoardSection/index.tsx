import type { BoardSectionProps } from 'src/components/BoardSection/types'

import Button from 'src/components/Button'
import TaskCard from 'src/components/TaskCard'
import Skeleton from 'src/components/Skeleton'
import SettingCard from 'src/components/SettingCard'

import { useBoardSection } from 'src/components/BoardSection/useBoardSection'

import s from 'src/components/BoardSection/styles.module.scss'

const BoardSection = ({
  sectionId,
  name,
  refBoard,
}: BoardSectionProps): JSX.Element => {
  const {
    openModalNewCard,
    deleteSection,
    editSection,
    data,
    isLoading,
    boardWidth,
  } = useBoardSection({ sectionId, name, refBoard })

  return (
    <div className={s.container} style={{ width: boardWidth }}>
      <div className={s.header}>
        <h3>{name}</h3>
        <div className={s.headerSetting}>
          <p>{data.length}</p>
          <SettingCard
            onEdit={editSection}
            onAdd={openModalNewCard}
            onDelete={deleteSection}
          />
        </div>
      </div>
      <Button text="Add new card" onClick={openModalNewCard} />
      <Skeleton
        isLoading={isLoading}
        dataLength={data.length}
        className={s.skeleton}
      >
        <ul className={s.taskList + ' scroll-y'}>
          {data.map(item => (
            <TaskCard key={item.id} {...item} />
          ))}
        </ul>
      </Skeleton>
    </div>
  )
}

export default BoardSection
