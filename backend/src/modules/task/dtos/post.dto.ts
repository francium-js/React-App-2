import { IsIn, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { Section } from 'src/entities/section.entity'

export class PostTaskDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  sectionId: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Create user layout' })
  title: string

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1711485506688 })
  dueDate: number

  @IsNotEmpty()
  @IsString()
  @IsIn(['Low', 'Medium', 'High'])
  @ApiProperty({ example: 'Medium' })
  priority: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example:
      'Task description should be unambuguration accurate, factual, comprehensible.',
  })
  description: string
}

export class PostTaskResponseDto {
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
