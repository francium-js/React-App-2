import { Optional } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { IsIn, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'

export class PatchBodyDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  sectionId: string

  @IsNotEmpty()
  @IsString()
  @Optional()
  @ApiProperty({ example: 'Create user layout' })
  title: string

  @IsNotEmpty()
  @IsNumber()
  @Optional()
  @ApiProperty({ example: 1711485506688 })
  dueDate: number

  @IsNotEmpty()
  @IsString()
  @Optional()
  @IsIn(['Low', 'Medium', 'High'])
  @ApiProperty({ example: 'Medium' })
  priority: string

  @IsNotEmpty()
  @IsString()
  @Optional()
  @ApiProperty({
    example:
      'Task description should be unambuguration accurate, factual, comprehensible.',
  })
  description: string
}
