import { PostTaskResponseDto } from 'src/modules/task/dtos/post.dto'
import { PatchTaskResponseDto } from 'src/modules/task/dtos/patch.dto'
import { GetTaskIdResponseDto } from 'src/modules/task/dtos/get-id.dto'

const responses = {
  post: ({ id, status, section }: PostTaskResponseDto) => {
    return {
      id,
      title: 'SuperTest POST',
      description: 'SuperTest POST',
      status,
      dueDate: 1711485506688,
      priority: 'Low',
      section,
    }
  },
  patch: ({ id, status, section }: PatchTaskResponseDto) => {
    return {
      id,
      status,
      title: 'SuperTest PATCH',
      description: 'SuperTest PATCH',
      dueDate: '1711485506688',
      priority: 'Medium',
      section,
    }
  },
  getBySectionId: (
    data: GetTaskIdResponseDto[],
    taskId: string,
  ): GetTaskIdResponseDto => {
    return data.find(item => item.id === taskId)
  },
}

export default responses
