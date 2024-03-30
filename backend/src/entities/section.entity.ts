import { ApiProperty } from '@nestjs/swagger'

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Task } from './task.entity'

@Entity()
export class Section {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @Column()
  @ApiProperty({ example: 'To do' })
  name: string

  @OneToMany(() => Task, task => task.section, { onDelete: 'CASCADE' })
  @ApiProperty({ type: () => [Task] })
  tasks: Task[]
}
