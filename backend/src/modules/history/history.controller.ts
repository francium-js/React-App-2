import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { HistoryService } from './history.service'

import { IdParamDto } from 'src/shared/dtos/id-param.dto'

import { History } from 'src/entities/history.entity'

@Controller('/history')
@ApiTags('Task history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  @ApiOperation({ summary: 'Get all history' })
  @ApiResponse({
    status: 200,
    type: [History],
  })
  async getAll(): Promise<History[]> {
    return this.historyService.get()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task history' })
  @ApiResponse({
    status: 200,
    type: [History],
  })
  async getById(@Param() { id }: IdParamDto): Promise<History[]> {
    return this.historyService.getById(id)
  }
}
