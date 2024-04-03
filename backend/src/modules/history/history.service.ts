import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { History } from 'src/entities/history.entity'
import { Board } from 'src/entities/board.entity'
import { Task } from 'src/entities/task.entity'

import { GetHistoryResponseDto } from './dtos/get.dto'
import { GetHistoryIdResponseDto } from './dtos/get-id.dto'
import { CreateHistoryT } from './types'

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async get(id: string): Promise<GetHistoryResponseDto[]> {
    const board = await this.boardRepository.findOne({
      where: { id },
      relations: ['history'],
    })

    if (!board) {
      throw new HttpException(`Board with ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return board.history
  }

  async getByTaskId(id: string): Promise<GetHistoryIdResponseDto[]> {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ['history', 'history.task'],
    })

    if (!task) {
      throw new HttpException(`Task with ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return task.history
  }

  async createHistory({ board, task, text }: CreateHistoryT): Promise<History> {
    const history = this.historyRepository.create({
      text: text,
      board,
      task,
    })
    return this.historyRepository.save(history)
  }
}
