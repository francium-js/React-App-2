import Skeleton from 'src/components/Skeleton'
import Section from 'src/components/Section'
import ControlPanel from 'src/components/ControlPanel'

import { useBoardPage } from 'src/pages/BoardPage/useBoardPage'

import s from 'src/pages/BoardPage/styles.module.scss'

const BoardPage = (): JSX.Element => {
  const { isLoading, data, refBoard, name } = useBoardPage()

  return (
    <div className={s.container}>
      <ControlPanel />
      <h2>Board: {name}</h2>
      <Skeleton
        className={s.skeleton}
        skeletonLength={1}
        size={100}
        isLoading={isLoading}
        dataLength={data.length}
      >
        <ul ref={refBoard} className={s.boardList + ' board-scroll-y'}>
          {data.map(({ id, name }) => (
            <Section key={id} sectionId={id} name={name} refBoard={refBoard} />
          ))}
        </ul>
      </Skeleton>
    </div>
  )
}

export default BoardPage
