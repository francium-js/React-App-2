import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Section } from 'src/entities/section.entity'
import { Board } from 'src/entities/board.entity'

import { HistoryService } from '../history/history.service'

import { GetSectionIdResponseDto } from './dtos/get-id.dto'
import { PostSectionResponseDto } from './dtos/post.dto'

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
    private readonly historyService: HistoryService,
  ) {}

  async create(boardId: string, name: string): Promise<PostSectionResponseDto> {
    const board = await this.boardRepository.findOne({ where: { id: boardId } })

    if (!board) {
      throw new HttpException(
        `Board with id ${boardId} not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    const createdSection = await this.sectionRepository.create({
      name,
      board,
    })

    const section = await this.sectionRepository.save(createdSection)

    await this.historyService.createHistory({
      board,
      text: [`Section "${section.name}" created`],
    })

    return section
  }

  async patch(id: string, name: string): Promise<void> {
    const section = await this.sectionRepository.findOne({
      where: { id },
      relations: ['board'],
    })

    if (!section) {
      throw new HttpException(
        `Section with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    await this.sectionRepository.update({ id }, { name })
    await this.historyService.createHistory({
      board: section.board,
      text: [`Section "${section.name}" renamed to ${name}`],
    })
  }

  async getById(id: string): Promise<GetSectionIdResponseDto[]> {
    const board = await this.boardRepository.findOne({
      where: { id },
      relations: ['sections'],
    })

    if (!board) {
      throw new HttpException(`Board with id ${id} not found`, HttpStatus.NOT_FOUND)
    }

    return board.sections
  }

  async deleteById(id: string): Promise<void> {
    const section = await this.sectionRepository.findOne({
      where: { id },
      relations: ['board'],
    })

    if (!section) {
      throw new HttpException(
        `Section with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    await this.historyService.createHistory({
      board: section.board,
      text: [`Section "${section.name}" deleted`],
    })

    await this.sectionRepository.delete(id)
  }
}
