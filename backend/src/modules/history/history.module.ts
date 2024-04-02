import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HistoryController } from './history.controller'

import { HistoryService } from './history.service'

import { History } from '../../entities/history.entity'
import { Task } from '../../entities/task.entity'
import { Board } from '../../entities/board.entity'

@Module({
  imports: [TypeOrmModule.forFeature([History, Task, Board])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
