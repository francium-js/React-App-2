import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { History } from 'src/entities/history.entity'
import { Section } from 'src/entities/section.entity'
import { Task } from 'src/entities/task.entity'

import { GetHistoryResponseDto } from './dtos/get.dto'
import { GetHistoryIdResponseDto } from './dtos/get-id.dto'

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async get(): Promise<GetHistoryResponseDto[]> {
    return this.historyRepository.find({
      relations: ['task'],
    })
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

  async createTaskHistory(task: Task, text: string[]): Promise<History> {
    const history = this.historyRepository.create({
      text: text,
      task,
    })
    return this.historyRepository.save(history)
  }

  async createSectionHistory(section: Section, text: string[]): Promise<History> {
    const history = this.historyRepository.create({
      text: text,
      section,
    })
    return this.historyRepository.save(history)
  }
}
