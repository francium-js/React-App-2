import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Section } from 'src/entities/section.entity'
import { Task } from 'src/entities/task.entity'

import { HistoryService } from 'src/modules/history/history.service'

import { giveArrayChangedParams } from 'src/shared/helpers/giveArrayChangedParams'

import { PatchTaskBodyDto, PatchTaskResponseDto } from './dtos/patch.dto'
import { PostTaskDto, PostTaskResponseDto } from './dtos/post.dto'
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

  async create({ sectionId, ...props }: PostTaskDto): Promise<PostTaskResponseDto> {
    const section = await this.sectionRepository.findOne({
      where: { id: sectionId },
      relations: ['board'],
    })

    if (!section) {
      throw new HttpException(
        `Section with id ${sectionId} not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    const createdTask = this.taskRepository.create({
      ...props,
      status: section.name,
      section: { id: section.id, name: section.name },
    })

    const task = await this.taskRepository.save(createdTask)

    await this.historyService.createHistory({
      board: section.board,
      task,
      text: [`Task "${task.title}" created`],
    })

    return task
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
      relations: ['board'],
    })

    if (!task) {
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    const text = giveArrayChangedParams(task, { ...rest, status: section.name })
    await this.historyService.createHistory({
      board: section.board,
      task,
      text,
    })
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
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ['section', 'section.board'],
    })

    if (!task) {
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    await this.historyService.createHistory({
      board: task.section.board,
      task,
      text: [`Task "${task.title}" deleted`],
    })

    await this.taskRepository.delete(id)
  }
}
