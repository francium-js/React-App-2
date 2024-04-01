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
  id: string

  @Column()
  status: string

  @Column()
  title: string

  @Column()
  description: string

  @Column({ type: 'bigint' })
  dueDate: number

  @Column({ type: 'enum', enum: ['Low', 'Medium', 'High'] })
  priority: string

  @JoinColumn({ name: 'section_id', referencedColumnName: 'id' })
  @ManyToOne(() => Section, section => section.tasks, { onDelete: 'CASCADE' })
  section: Section

  @OneToMany(() => History, history => history.task)
  history: History[]
}
