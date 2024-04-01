export type CreateTaskPayLoadT = {
  sectionId: string
  dueDate: number
  title: string
  priority: 'Low' | 'Medium' | 'High'
  description: string
}

export type SectionCreatePayLoadT = { id: string; name: string }

export type UpdatePayLoadT = {
  id: string
  title?: string
  sectionId?: string
  dueDate?: number
  priority?: 'Low' | 'Medium' | 'High'
  description?: string
}

export type CreateSectionPayLoadT = {
  boardId: string
  name: string
}

export type PatchBoardPayloadT = {
  id: string
  name: string
}
