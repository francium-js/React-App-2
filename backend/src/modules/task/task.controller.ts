import { Controller, Post, Get, Body, Param, Delete, Patch } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { TaskService } from './task.service'

import { CreateBodyDto } from './dtos/create-body.dto'
import { PatchBodyDto } from './dtos/patch-body-dto'
import { CreateBodyResponseDto } from './dtos/create-body-response.dto'

import { IdParamDto } from 'src/shared/dtos/id-param.dto'
import { Task } from 'src/entities/task.entity'

@Controller('/task')
@ApiTags('Task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({
    status: 200,
    type: CreateBodyResponseDto,
  })
  async create(@Body() data: CreateBodyDto): Promise<CreateBodyResponseDto> {
    return this.taskService.create(data)
  }

  @Patch()
  @ApiOperation({ summary: 'Patch task' })
  @ApiResponse({
    status: 200,
    type: Task,
  })
  async patch(@Body() data: PatchBodyDto): Promise<Task> {
    return this.taskService.patch(data)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all tasks from section' })
  @ApiResponse({
    status: 200,
    type: [Task],
  })
  async get(@Param() { id }: IdParamDto): Promise<Task[]> {
    const result = await this.taskService.get(id)

    return result
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete task' })
  @ApiResponse({
    status: 200,
    type: IdParamDto,
  })
  async delete(@Param() { id }: IdParamDto): Promise<IdParamDto> {
    await this.taskService.delete(id)

    return { id }
  }
}
