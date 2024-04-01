import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Task } from './task.entity'
import { Board } from './board.entity'
import { History } from './history.entity'

@Entity()
export class Section {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => Task, task => task.section, { onDelete: 'CASCADE' })
  tasks: Task[]

  @OneToMany(() => History, history => history.section)
  history: History[]

  @JoinColumn({ name: 'board_id', referencedColumnName: 'id' })
  @ManyToOne(() => Board, board => board.sections, { onDelete: 'CASCADE' })
  board: Board
}
