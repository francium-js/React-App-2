import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { Section } from '../../../entities/section.entity'

export class GetTaskIdParamsDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string
}

export class GetTaskIdResponseDto {
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
