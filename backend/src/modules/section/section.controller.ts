import { Controller, Post, Body, Delete, Param, Patch, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { SectionService } from './section.service'

import { PostBodyDto } from './dtos/post-body.dto'
import { PatchBodyDto } from './dtos/patch-body.dto'

import { SectionResponseDto } from 'src/shared/dtos/section-response.dto'
import { IdParamDto } from 'src/shared/dtos/id-param.dto'

@Controller('/section')
@ApiTags('Board section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Get()
  @ApiOperation({ summary: 'Get all sections' })
  @ApiResponse({
    status: 200,
    type: SectionResponseDto,
  })
  async get(): Promise<SectionResponseDto[]> {
    return this.sectionService.get()
  }

  @Post()
  @ApiOperation({ summary: 'Create board section' })
  @ApiResponse({
    status: 200,
    type: SectionResponseDto,
  })
  async create(@Body() { name }: PostBodyDto): Promise<SectionResponseDto> {
    return this.sectionService.create(name)
  }

  @Patch()
  @ApiOperation({ summary: 'Patch board section' })
  @ApiResponse({
    status: 200,
    type: SectionResponseDto,
  })
  async patch(@Body() { id, name }: PatchBodyDto): Promise<PatchBodyDto> {
    await this.sectionService.patch(id, name)

    return { id, name }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete board section' })
  @ApiResponse({
    status: 200,
    type: IdParamDto,
  })
  async delete(@Param() { id }: IdParamDto): Promise<IdParamDto> {
    await this.sectionService.delete(id)

    return { id }
  }
}
