import { ApiProperty } from '@nestjs/swagger'

import { Section } from 'src/entities/section.entity'

export class GetBoardResponseDto {
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @ApiProperty({ example: 'To do' })
  name: string

  @ApiProperty({ type: [Section] })
  sections: Section[]
}
