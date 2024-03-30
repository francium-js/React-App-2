import { Task } from 'src/entities/task.entity'

const formatDate = (milliseconds: string | number): string => {
  const date = new Date(Number(milliseconds))

  const dayOfWeek = date.toLocaleString('en', { weekday: 'short' }).slice(0, 3)
  const dayOfMonth = date.getDate()
  const month = date.toLocaleString('en', { month: 'short' }).slice(0, 3)

  return `${dayOfWeek}, ${dayOfMonth} ${month}`
}

export const giveArrayChangedProps = (task: Task, data: Partial<Task>): string[] => {
  const { title, status, dueDate, priority, description } = data

  const result = ['Changed params:']

  if (title !== task.title) {
    result.push(`Title: ${task.title} > ${title}`)
  }

  if (status !== task.status) {
    result.push(`Status: ${task.status} > ${status}`)
  }

  if (String(dueDate) !== String(task.dueDate)) {
    result.push(`DueDate: ${formatDate(task.dueDate)} > ${formatDate(dueDate)}`)
  }

  if (priority !== task.priority) {
    result.push(`Priority: ${task.priority} > ${priority}`)
  }

  if (description !== task.description) {
    result.push(
      `Description: ${task.description.slice(0, 20)} > ${description.slice(0, 20)}`,
    )
  }

  return result
}
