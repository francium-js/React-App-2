import BoardSection from 'src/components/BoardSection'
import ControlPanel from 'src/components/ControlPanel'
import NoDataInfo from 'src/components/NoDataInfo'

import { useTaskBoardPage } from 'src/pages/TaskBoardPage/useTaskBoardPage'

import { BoardContainer, Container } from 'src/pages/TaskBoardPage/styles'

const TaskBoard = (): JSX.Element => {
  const { data } = useTaskBoardPage()
  console.log(data)

  return (
    <Container>
      <ControlPanel />
      {!data.length ? (
        <NoDataInfo text="No sections, please create new list" />
      ) : (
        <BoardContainer>
          {data.map(item => (
            <BoardSection key={item.id} sectionId={item.id} name={item.name} />
          ))}
        </BoardContainer>
      )}
    </Container>
  )
}

export default TaskBoard
