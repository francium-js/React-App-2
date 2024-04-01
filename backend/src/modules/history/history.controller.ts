import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { HistoryService } from './history.service'

import { GetHistoryParamsDto, GetHistoryResponseDto } from './dtos/get.dto'
import { GetHistoryIdParamsDto, GetHistoryIdResponseDto } from './dtos/get-id.dto'

@Controller('/history')
@ApiTags('Task history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get('/board/:id')
  @ApiOperation({ summary: 'Get all history' })
  @ApiResponse({
    status: 200,
    type: [GetHistoryResponseDto],
  })
  async getAll(
    @Param() { id }: GetHistoryParamsDto,
  ): Promise<GetHistoryResponseDto[]> {
    return this.historyService.get(id)
  }

  @Get('/task/:id')
  @ApiOperation({ summary: 'Get task history' })
  @ApiResponse({
    status: 200,
    type: [GetHistoryIdResponseDto],
  })
  async getById(
    @Param() { id }: GetHistoryIdParamsDto,
  ): Promise<GetHistoryIdResponseDto[]> {
    return this.historyService.getByTaskId(id)
  }
}
