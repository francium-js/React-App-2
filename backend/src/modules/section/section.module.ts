import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { SectionService } from './section.service'
import { HistoryService } from '../history/history.service'

import { SectionController } from './section.controller'

import { Section } from '../../entities/section.entity'
import { History } from '../../entities/history.entity'
import { Board } from '../../entities/board.entity'
import { Task } from '../../entities/task.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Section, History, Board, Task])],
  controllers: [SectionController],
  providers: [SectionService, HistoryService],
})
export class SectionModule {}
