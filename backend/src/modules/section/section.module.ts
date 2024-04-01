import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { SectionService } from './section.service'
import { HistoryService } from '../history/history.service'

import { SectionController } from './section.controller'

import { Section } from 'src/entities/section.entity'
import { History } from 'src/entities/history.entity'
import { Board } from 'src/entities/board.entity'
import { Task } from 'src/entities/task.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Section, History, Board, Task])],
  controllers: [SectionController],
  providers: [SectionService, HistoryService],
})
export class SectionModule {}
