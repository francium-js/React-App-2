import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HistoryService } from './history.service'
import { HistoryController } from './history.controller'

import { History } from 'src/entities/history.entity'
import { Task } from 'src/entities/task.entity'

@Module({
  imports: [TypeOrmModule.forFeature([History, Task])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
