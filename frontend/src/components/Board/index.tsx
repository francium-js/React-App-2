import Skeleton from 'src/components/Skeleton'
import Section from 'src/components/Section'
import ControlPanel from 'src/components/ControlPanel'

import type { BoardProps } from 'src/components/Board/types'

import { useBoard } from 'src/components/Board/useBoard'

import s from 'src/components/Board/styles.module.scss'

const Board = ({ boardId }: BoardProps): JSX.Element => {
  const { isLoading, data, refBoard } = useBoard(boardId)

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
          {data.map(({ id, name }) => (
            <Section key={id} sectionId={id} name={name} refBoard={refBoard} />
          ))}
        </ul>
      </Skeleton>
    </div>
  )
}

export default Board
