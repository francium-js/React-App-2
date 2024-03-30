export type AddNewCardPayLoadT = {
  sectionId: string
  dueDate: number
  title: string
  priority: 'Low' | 'Medium' | 'High'
  description: string
}

export type SectionCreatePayLoadT = { id: string; name: string }

export type UpdateCardPayLoadT = {
  id: string
  title?: string
  sectionId?: string
  dueDate?: number
  priority?: 'Low' | 'Medium' | 'High'
  description?: string
}
