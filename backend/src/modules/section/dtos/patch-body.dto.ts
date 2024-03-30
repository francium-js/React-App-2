import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class PatchBodyDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'To do' })
  name: string
}
