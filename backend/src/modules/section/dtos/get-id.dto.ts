import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { Task } from 'src/entities/task.entity'

export class GetSectionIdParamsDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string
}

export class GetSectionIdResponseDto {
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @ApiProperty({ example: 'To do' })
  name: string

  @ApiProperty({ type: () => [Task] })
  tasks: Task[]
}
