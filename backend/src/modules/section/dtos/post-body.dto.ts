import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class PostBodyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'To do' })
  name: string
}
