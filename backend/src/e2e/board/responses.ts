import { GetBoardResponseDto } from 'src/modules/board/dtos/get.dto'

const responses = {
  get: (data: GetBoardResponseDto[], boardId: string): GetBoardResponseDto => {
    return data.find(item => item.id === boardId)
  },
}

export default responses
