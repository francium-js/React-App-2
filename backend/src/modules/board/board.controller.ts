import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { BoardService } from './board.service'

import { GetBoardResponseDto } from './dtos/get.dto'
import { PostBoardBodyDto, PostBoardResponseDto } from './dtos/post.dto'
import { PatchBoardBodyDto, PatchBoardResponseDto } from './dtos/patch.dto'
import {
  DeleteBoardIdParamsDto,
  DeleteBoardIdResponseDto,
} from './dtos/delete-id.dto'

@Controller('/board')
@ApiTags('Board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  @ApiOperation({ summary: 'Get all boards' })
  @ApiResponse({
    status: 201,
    type: [GetBoardResponseDto],
  })
  async get(): Promise<GetBoardResponseDto[]> {
    return this.boardService.get()
  }

  @Post()
  @ApiOperation({ summary: 'Create new board' })
  @ApiResponse({
    status: 200,
    type: PostBoardResponseDto,
  })
  async create(@Body() { name }: PostBoardBodyDto): Promise<PostBoardResponseDto> {
    return this.boardService.create(name)
  }

  @Patch()
  @ApiOperation({ summary: 'Patch board' })
  @ApiResponse({
    status: 200,
    type: PatchBoardResponseDto,
  })
  async patch(
    @Body() { id, name }: PatchBoardBodyDto,
  ): Promise<PatchBoardResponseDto> {
    await this.boardService.patch(id, name)

    return { id, name }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete board' })
  @ApiResponse({
    status: 200,
    type: DeleteBoardIdResponseDto,
  })
  async delete(
    @Param() { id }: DeleteBoardIdParamsDto,
  ): Promise<DeleteBoardIdResponseDto> {
    await this.boardService.deleteById(id)

    return { id }
  }
}
