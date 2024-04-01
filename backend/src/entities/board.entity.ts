import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Section } from './section.entity'
import { History } from './history.entity'

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => Section, section => section.board, { onDelete: 'CASCADE' })
  sections: Section[]

  @OneToMany(() => History, history => history.board, { onDelete: 'CASCADE' })
  history: History[]
}
