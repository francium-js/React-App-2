import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { HistoryService } from './history.service'

import { GetHistoryResponseDto } from './dtos/get.dto'
import { GetHistoryIdParamsDto, GetHistoryIdResponseDto } from './dtos/get-id.dto'

@Controller('/history')
@ApiTags('Task history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  @ApiOperation({ summary: 'Get all history' })
  @ApiResponse({
    status: 200,
    type: [GetHistoryResponseDto],
  })
  async getAll(): Promise<GetHistoryResponseDto[]> {
    return this.historyService.get()
  }

  @Get(':id')
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
