import Board from 'src/components/Board'

import { useBoardPage } from 'src/pages/BoardPage/useBoardPage'

const BoardPage = (): JSX.Element => {
  const { boardId } = useBoardPage()

  return <Board boardId={boardId} />
}

export default BoardPage
