import { ApiProperty } from '@nestjs/swagger'

import { Section } from 'src/entities/section.entity'

export class CreateBodyResponseDto {
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @ApiProperty({ example: 'Create user layout' })
  title: string

  @ApiProperty({ example: 'To do' })
  status: string

  @ApiProperty({ example: 'Low' })
  priority: string

  @ApiProperty({ example: 1711485506688 })
  dueDate: number

  @ApiProperty({
    example:
      'Task description should be unambuguration accurate, factual, comprehensible.',
  })
  description: string

  @ApiProperty({ type: () => Section })
  section: Section
}
