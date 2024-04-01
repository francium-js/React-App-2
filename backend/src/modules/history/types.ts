import { Board } from 'src/entities/board.entity'
import { Task } from 'src/entities/task.entity'

export type CreateHistoryT = {
  board?: Board
  task?: Task
  text: string[]
}
