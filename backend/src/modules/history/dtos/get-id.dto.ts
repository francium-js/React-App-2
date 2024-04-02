import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { Section } from '../../../entities/section.entity'
import { Board } from '../../../entities/board.entity'
import { Task } from '../../../entities/task.entity'

export class GetHistoryIdParamsDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string
}

export class GetHistoryIdResponseDto {
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @ApiProperty({ example: ['Tack created'] })
  text: string[]

  @ApiProperty({ example: 1434234532643644 })
  createdAt: number

  @ApiProperty({ type: () => Task, nullable: true })
  task: Task

  @ApiProperty({ type: () => Section, nullable: true })
  section: Section

  @ApiProperty({ type: () => Board, nullable: true })
  board: Board
}
