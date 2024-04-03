import { PostTaskDto } from 'src/modules/task/dtos/post.dto'
import { PatchTaskBodyDto } from 'src/modules/task/dtos/patch.dto'

const requests = {
  post: (sectionId: string): PostTaskDto => {
    return {
      sectionId,
      title: 'SuperTest POST',
      dueDate: 1711485506688,
      priority: 'Low',
      description: 'SuperTest POST',
    }
  },

  patch: (id: string, sectionId: string): PatchTaskBodyDto => {
    return {
      id,
      sectionId,
      title: 'SuperTest PATCH',
      dueDate: 1711485506688,
      priority: 'Medium',
      description: 'SuperTest PATCH',
    }
  },
}

export default requests
