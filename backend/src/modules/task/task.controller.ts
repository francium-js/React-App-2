import { Controller, Post, Get, Body, Param, Delete, Patch } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { TaskService } from './task.service'

import { PostTaskDto, PostTaskResponseDto } from './dtos/post.dto'
import { PatchTaskBodyDto, PatchTaskResponseDto } from './dtos/patch-dto'
import { GetTaskIdParamsDto, GetTaskIdResponseDto } from './dtos/get-id.dto'
import { DeleteTaskIdParamsDto, DeleteTaskResponseDto } from './dtos/delete-id.dto'

@Controller('/task')
@ApiTags('Task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create new task' })
  @ApiResponse({
    status: 200,
    type: PostTaskResponseDto,
  })
  async create(@Body() data: PostTaskDto): Promise<PostTaskResponseDto> {
    return this.taskService.create(data)
  }

  @Patch()
  @ApiOperation({ summary: 'Patch task' })
  @ApiResponse({
    status: 200,
    type: PatchTaskResponseDto,
  })
  async patch(@Body() data: PatchTaskBodyDto): Promise<PatchTaskResponseDto> {
    return this.taskService.patch(data)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tasks from section' })
  @ApiResponse({
    status: 200,
    type: [GetTaskIdResponseDto],
  })
  async get(@Param() { id }: GetTaskIdParamsDto): Promise<GetTaskIdResponseDto[]> {
    const result = await this.taskService.get(id)

    return result
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete task' })
  @ApiResponse({
    status: 200,
    type: DeleteTaskResponseDto,
  })
  async delete(
    @Param() { id }: DeleteTaskIdParamsDto,
  ): Promise<DeleteTaskResponseDto> {
    await this.taskService.deleteById(id)

    return { id }
  }
}
