import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class PostBoardBodyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'To do' })
  name: string
}

export class PostBoardResponseDto {
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @ApiProperty({ example: 'My board task project' })
  name: string
}
