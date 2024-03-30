import { ApiProperty } from '@nestjs/swagger'
import { IsIn, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'

export class CreateBodyDto {
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
