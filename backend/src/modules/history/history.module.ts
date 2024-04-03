import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HistoryController } from './history.controller'

import { HistoryService } from './history.service'

import { History } from 'src/entities/history.entity'
import { Task } from 'src/entities/task.entity'
import { Board } from 'src/entities/board.entity'

@Module({
  imports: [TypeOrmModule.forFeature([History, Task, Board])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
