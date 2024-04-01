import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Section } from 'src/entities/section.entity'
import { Task } from 'src/entities/task.entity'

import { HistoryService } from '../history/history.service'

import { giveArrayChangedProps } from 'src/shared/helpers/giveArrayChangedProps'

import { PatchTaskBodyDto, PatchTaskResponseDto } from './dtos/patch-dto'
import { PostBodyDto, PostResponseDto } from './dtos/post.dto'
import { GetTaskIdResponseDto } from './dtos/get-id.dto'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly historyService: HistoryService,
  ) {}

  async get(id: string): Promise<GetTaskIdResponseDto[]> {
    const section = await this.sectionRepository.findOne({
      where: { id },
      relations: ['tasks', 'tasks.section'],
    })

    if (!section) {
      throw new HttpException(`Section with ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return section.tasks
  }

  async create({ sectionId, ...props }: PostBodyDto): Promise<PostResponseDto> {
    const section = await this.sectionRepository.findOne({
      where: { id: sectionId },
    })

    if (!section) {
      throw new HttpException(
        `Board section with id ${sectionId} not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    const createdTask = this.taskRepository.create({
      ...props,
      status: section.name,
      section,
    })

    const savedTask = await this.taskRepository.save(createdTask)

    await this.historyService.createTaskHistory(savedTask, [
      `Task "${savedTask.title}" created`,
    ])

    return savedTask
  }

  async patch({
    id,
    sectionId,
    ...rest
  }: PatchTaskBodyDto): Promise<PatchTaskResponseDto> {
    const task = await this.taskRepository.findOne({ where: { id } })

    if (!task) {
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    const section = await this.sectionRepository.findOne({
      where: { id: sectionId },
    })

    if (!task) {
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    const text = giveArrayChangedProps(task, { ...rest, status: section.name })
    await this.historyService.createTaskHistory(task, text)
    await this.taskRepository.update(
      { id },
      { ...rest, section, status: section.name },
    )

    return this.taskRepository.findOne({
      where: { id },
      relations: ['section'],
    })
  }

  async deleteById(id: string): Promise<void> {
    const task = await this.taskRepository.findOne({ where: { id } })

    if (!task) {
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    await this.taskRepository.delete(id)
    await this.historyService.createTaskHistory(task, [
      `Task "${task.title}" deleted`,
    ])
  }
}
