import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Section } from 'src/entities/section.entity'

import { SectionResponseDto } from 'src/shared/dtos/section-response.dto'

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
  ) {}

  async get(): Promise<SectionResponseDto[]> {
    return this.sectionRepository.find()
  }

  async create(name: string): Promise<SectionResponseDto> {
    return this.sectionRepository.save({
      name,
    })
  }

  async patch(id: string, name: string): Promise<void> {
    const section = await this.sectionRepository.update({ id: id }, { name })

    if (section.affected === 0) {
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND)
    }
  }

  async delete(id: string): Promise<void> {
    const deleteResult = await this.sectionRepository.delete(id)

    if (deleteResult.affected === 0) {
      throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND)
    }
  }
}
