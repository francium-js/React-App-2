import { IsIn, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'
import { Optional } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'

import { Section } from '../../../entities/section.entity'

export class PatchTaskBodyDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  sectionId: string

  @IsNotEmpty()
  @Optional()
  @IsString()
  @ApiProperty({ example: 'Create user layout', required: false })
  title: string

  @IsNotEmpty()
  @Optional()
  @IsNumber()
  @ApiProperty({ example: 1711485506688, required: false })
  dueDate: number

  @IsNotEmpty()
  @Optional()
  @IsString()
  @IsIn(['Low', 'Medium', 'High'])
  @ApiProperty({ example: 'Medium', required: false })
  priority: string

  @IsNotEmpty()
  @Optional()
  @IsString()
  @ApiProperty({
    example:
      'Task description should be unambuguration accurate, factual, comprehensible.',
    required: false,
  })
  description: string
}

export class PatchTaskResponseDto {
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @ApiProperty({ example: 'To do' })
  status: string

  @ApiProperty({ example: 'Task name' })
  title: string

  @ApiProperty({ example: 'Task description...' })
  description: string

  @ApiProperty({ example: 1434234532643644 })
  dueDate: number

  @ApiProperty({ example: 'Low' })
  priority: string

  @ApiProperty({ type: Section })
  section: Section
}
