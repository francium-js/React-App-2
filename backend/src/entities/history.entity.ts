import { ApiProperty } from '@nestjs/swagger'

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm'

import { Task } from './task.entity'

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @Column({ type: 'text', array: true })
  @ApiProperty({ example: ['Tack created'] })
  text: string[]

  @Column({ type: 'bigint' })
  @ApiProperty({ example: 1434234532643644 })
  createdAt: number

  @ManyToOne(() => Task, task => task.history, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'history_id' })
  @ApiProperty({ type: () => Task })
  task: Task

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date().getTime()
  }
}
