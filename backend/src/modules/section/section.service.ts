import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Section } from 'src/entities/section.entity'

import { HistoryService } from '../history/history.service'

import { GetSectionIdResponseDto } from './dtos/get-id.dto'
import { PostSectionResponseDto } from './dtos/post.dto'

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
    private readonly historyService: HistoryService,
  ) {}

  async create(name: string): Promise<PostSectionResponseDto> {
    const createdSection = await this.sectionRepository.save({
      name,
    })

    this.historyService.createSectionHistory(createdSection, [
      `Section "${createdSection.name}" created`,
    ])

    return createdSection
  }

  async patch(id: string, name: string): Promise<void> {
    const section = await this.sectionRepository.findOne({
      where: { id },
    })

    if (!section) {
      throw new HttpException(
        `Section with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    await this.sectionRepository.update({ id: id }, { name })
    await this.historyService.createSectionHistory(section, [
      `Section "${name}" renamed to ${section.name}`,
    ])
  }

  async getById(id: string): Promise<GetSectionIdResponseDto> {
    return this.sectionRepository.findOne({
      where: { id },
      relations: ['tasks'],
    })
  }

  async deleteById(id: string): Promise<void> {
    const section = await this.sectionRepository.findOne({
      where: { id },
    })

    if (!section) {
      throw new HttpException(
        `Section with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    await this.sectionRepository.delete(id)
    await this.historyService.createSectionHistory(section, [
      `Section "${section.name}" deleted`,
    ])
  }
}
