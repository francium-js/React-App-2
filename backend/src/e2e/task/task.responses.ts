import { PostTaskResponseDto } from '../../modules/task/dtos/post.dto'
import { PatchTaskResponseDto } from '../../modules/task/dtos/patch.dto'
import { GetTaskIdResponseDto } from '../../modules/task/dtos/get-id.dto'

const taskResponses = {
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
  getBySectionId: (data: GetTaskIdResponseDto[]) => {
    return data.map(
      ({ id, status, title, description, dueDate, priority, section }) => {
        return { id, status, title, description, dueDate, priority, section }
      },
    )
  },
}

export default taskResponses
