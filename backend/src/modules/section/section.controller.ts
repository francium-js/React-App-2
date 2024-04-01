import { Controller, Post, Body, Delete, Param, Patch, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { SectionService } from './section.service'

import { GetSectionIdParamsDto, GetSectionIdResponseDto } from './dtos/get-id.dto'
import { PostSectionBodyDto, PostSectionResponseDto } from './dtos/post.dto'
import { PatchSectionBodyDto, PatchSectionResponseDto } from './dtos/patch.dto'
import {
  DeleteSectionIdParamsDto,
  DeleteSectionIdResponseDto,
} from './dtos/delete-id.dto'

@Controller('/section')
@ApiTags('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  @ApiOperation({ summary: 'Create board section' })
  @ApiResponse({
    status: 200,
    type: PostSectionResponseDto,
  })
  async create(
    @Body() { name }: PostSectionBodyDto,
  ): Promise<PostSectionResponseDto> {
    return this.sectionService.create(name)
  }

  @Patch()
  @ApiOperation({ summary: 'Patch board section' })
  @ApiResponse({
    status: 200,
    type: PatchSectionResponseDto,
  })
  async patch(
    @Body() { id, name }: PatchSectionBodyDto,
  ): Promise<PatchSectionResponseDto> {
    await this.sectionService.patch(id, name)

    return { id, name }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all sections' })
  @ApiResponse({
    status: 200,
    type: [GetSectionIdResponseDto],
  })
  async get(
    @Param() { id }: GetSectionIdParamsDto,
  ): Promise<GetSectionIdResponseDto> {
    return this.sectionService.getById(id)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete board section' })
  @ApiResponse({
    status: 200,
    type: DeleteSectionIdResponseDto,
  })
  async delete(
    @Param() { id }: DeleteSectionIdParamsDto,
  ): Promise<DeleteSectionIdResponseDto> {
    await this.sectionService.deleteById(id)

    return { id }
  }
}
