import { useParams } from 'react-router-dom'

export const useBoardPage = () => {
  const { boardId = '' } = useParams()

  return { boardId }
}
