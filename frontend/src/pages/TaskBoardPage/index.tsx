import BoardSection from 'src/components/BoardSection'
import ControlPanel from 'src/components/ControlPanel'

import { useTaskBoardPage } from 'src/pages/TaskBoardPage/useTaskBoardPage'

import s from 'src/pages/TaskBoardPage/styles.module.scss'
import Skeleton from 'src/components/Skeleton'

const TaskBoard = (): JSX.Element => {
  const { data, isLoading, refBoard } = useTaskBoardPage()

  return (
    <div ref={refBoard} className={s.container}>
      <ControlPanel />
      <Skeleton
        className={s.skeleton}
        skeletonLength={1}
        size={100}
        isLoading={isLoading}
        dataLength={data.length}
      >
        <ul className={s.boardList + ' board-scroll-y'}>
          {data.map(item => (
            <BoardSection
              key={item.id}
              sectionId={item.id}
              name={item.name}
              refBoard={refBoard}
            />
          ))}
        </ul>
      </Skeleton>
    </div>
  )
}

export default TaskBoard
