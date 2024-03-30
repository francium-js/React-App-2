import { ApiProperty } from '@nestjs/swagger'

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Section } from './section.entity'
import { History } from './history.entity'

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @Column()
  @ApiProperty({ example: 'To do' })
  status: string

  @Column()
  @ApiProperty({ example: 'Task name' })
  title: string

  @Column()
  @ApiProperty({ example: 'Task description...' })
  description: string

  @Column({ type: 'bigint' })
  @ApiProperty({ example: 1434234532643644 })
  dueDate: number

  @Column({ type: 'enum', enum: ['Low', 'Medium', 'High'] })
  @ApiProperty({ example: 'Low' })
  priority: string

  @JoinColumn({ name: 'status_id', referencedColumnName: 'id' })
  @ApiProperty({ type: () => Section })
  @ManyToOne(() => Section, section => section.tasks, { onDelete: 'CASCADE' })
  section: Section

  @OneToMany(() => History, history => history.task)
  @ApiProperty({ type: () => [History] })
  history: History[]
}
