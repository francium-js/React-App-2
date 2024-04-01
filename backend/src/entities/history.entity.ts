import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm'

import { Board } from './board.entity'
import { Task } from './task.entity'
import { Section } from './section.entity'

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text', array: true })
  text: string[]

  @Column({ type: 'bigint' })
  createdAt: number

  @ManyToOne(() => Task, task => task.history, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'task_id' })
  task: Task

  @ManyToOne(() => Section, section => section.history, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'section_id' })
  section: Section

  @ManyToOne(() => Board, board => board.history, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date().getTime()
  }
}
