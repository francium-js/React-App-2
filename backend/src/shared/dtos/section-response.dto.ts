import { ApiProperty } from '@nestjs/swagger'

export class SectionResponseDto {
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @ApiProperty({ example: 'To do' })
  name: string
}
