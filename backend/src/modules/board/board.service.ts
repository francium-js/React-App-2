import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Board } from '../../entities/board.entity'
import { GetBoardResponseDto } from './dtos/get.dto'
import { PostBoardResponseDto } from './dtos/post.dto'

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async get(): Promise<GetBoardResponseDto[]> {
    return this.boardRepository.find()
  }

  async create(name: string): Promise<PostBoardResponseDto> {
    return this.boardRepository.save({
      name,
    })
  }

  async patch(id: string, name: string): Promise<void> {
    const board = await this.boardRepository.update({ id }, { name })

    if (!board.affected) {
      throw new HttpException(`Board with id ${id} not found`, HttpStatus.NOT_FOUND)
    }
  }

  async getById(id: string): Promise<GetBoardResponseDto> {
    return this.boardRepository.findOne({ where: { id } })
  }

  async deleteById(id: string): Promise<void> {
    const deleteResult = await this.boardRepository.delete(id)

    if (!deleteResult.affected) {
      throw new HttpException(`Board with id ${id} not found`, HttpStatus.NOT_FOUND)
    }
  }
}
