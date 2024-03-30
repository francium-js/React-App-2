import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { History } from 'src/entities/history.entity'
import { Task } from 'src/entities/task.entity'

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async get(): Promise<History[]> {
    return this.historyRepository.find({
      relations: ['task'],
    })
  }

  async getById(id: string): Promise<History[]> {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ['history', 'history.task'],
    })

    if (!task) {
      throw new HttpException(`Task with ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return task.history
  }

  async create(task: Task, text: string[]): Promise<History> {
    const history = this.historyRepository.create({
      text: text,
      task,
    })
    return this.historyRepository.save(history)
  }
}
